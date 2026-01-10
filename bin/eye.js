#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Default flags (mirrors ~/.zshrc RG_DEFAULTS and FD_DEFAULTS)
const RG_DEFAULTS = ['--hidden', '--no-follow', '--no-ignore', '-i'];
const FD_DEFAULTS = ['-H', '-L', '--no-ignore'];

// Parse arguments
const args = process.argv.slice(2);

// Help
if (args.includes('--help') || args.includes('-h') || args.length === 0) {
  console.log(`
👁️  EYE - The Eye sees EVERYTHING

Usage:
  eye <pattern> [path]           Search file contents (via ripgrep)
  eye -f <pattern> [path]        Search filenames (via fd)
  eye :ext [path]                Find files by extension (e.g., eye :json .)
  eye :ext1,ext2 [path]          Multiple extensions (e.g., eye :js,ts ~/code)

Options:
  -f, --files      Search filenames instead of content
  -a, --all        Include binary files
  -c, --count      Count results
  -t, --tree       Show results as tree
  -E <glob>        Exclude paths matching glob (repeatable)
  -h, --help       Show this help

Examples:
  eye "TODO" .                   Find TODO in current directory
  eye "function" ~/code          Search for "function" in ~/code
  eye -f "config" ~/projects     Find files named "config"
  eye :json ~/projects           Find all .json files
  eye :ts,tsx src -c             Count TypeScript files in src

Requirements:
  - ripgrep (rg) for content search
  - fd for filename search

Install dependencies:
  brew install ripgrep fd        # macOS
  apt install ripgrep fd-find    # Ubuntu/Debian
`);
  process.exit(0);
}

// Check for required tools
function checkTool(name, altName) {
  const { execSync } = require('child_process');
  try {
    execSync(`which ${name}`, { stdio: 'ignore' });
    return name;
  } catch {
    if (altName) {
      try {
        execSync(`which ${altName}`, { stdio: 'ignore' });
        return altName;
      } catch {
        return null;
      }
    }
    return null;
  }
}

// Parse arguments
let mode = 'content';
let includeBinary = false;
let countMode = false;
let treeMode = false;
let pattern = null;
let searchPath = '.';
let excludes = [];
let extensions = [];

let i = 0;
while (i < args.length) {
  const arg = args[i];
  
  if (arg === '-f' || arg === '--files') {
    mode = 'files';
  } else if (arg === '-a' || arg === '--all') {
    includeBinary = true;
  } else if (arg === '-c' || arg === '--count') {
    countMode = true;
  } else if (arg === '-t' || arg === '--tree') {
    treeMode = true;
  } else if (arg === '-E' || arg === '--exclude') {
    i++;
    if (args[i]) excludes.push(args[i]);
  } else if (arg.startsWith(':')) {
    // Extension filter :json or :js,ts
    const exts = arg.slice(1).replace(/\s/g, '').split(',');
    extensions.push(...exts.filter(e => e));
  } else if (!pattern && extensions.length === 0) {
    // Only set pattern if no extensions (extensions don't need a pattern)
    pattern = arg;
  } else {
    searchPath = arg;
  }
  i++;
}

// If only extensions specified, use match-all pattern
if (extensions.length > 0 && !pattern) {
  pattern = '.';
}

if (!pattern && extensions.length === 0) {
  console.error('Error: No pattern specified. Use --help for usage.');
  process.exit(1);
}

// Build command
let cmd, cmdArgs;

if (mode === 'files' || extensions.length > 0) {
  // Filename search via fd
  const fdCmd = checkTool('fd', 'fdfind');
  if (!fdCmd) {
    console.error('Error: fd not found. Install with: brew install fd');
    process.exit(1);
  }
  
  cmd = fdCmd;
  cmdArgs = [...FD_DEFAULTS];
  
  // Add extensions
  for (const ext of extensions) {
    cmdArgs.push('-e', ext);
  }
  
  // Add excludes (handle absolute vs relative paths)
  for (const ex of excludes) {
    if (ex.startsWith('/')) {
      cmdArgs.push('--exclude', ex);
    } else {
      cmdArgs.push('--exclude', `*${ex}*`);
    }
  }
  
  // Add pattern (use '.' as match-all if only extensions specified)
  if (extensions.length > 0) {
    cmdArgs.push('.');
  } else if (pattern) {
    cmdArgs.push(pattern);
  }
  
  // Add search path
  cmdArgs.push(searchPath);
  
} else {
  // Content search via rg
  const rgCmd = checkTool('rg');
  if (!rgCmd) {
    console.error('Error: ripgrep not found. Install with: brew install ripgrep');
    process.exit(1);
  }
  
  cmd = rgCmd;
  cmdArgs = [...RG_DEFAULTS];
  
  if (includeBinary) cmdArgs.push('-a');
  if (countMode) cmdArgs.push('-c');
  
  // Add excludes (handle absolute vs relative paths)
  for (const ex of excludes) {
    if (ex.startsWith('/')) {
      cmdArgs.push('--glob', `!${ex}/**`);
    } else {
      cmdArgs.push('--glob', `!**/${ex}/**`);
    }
  }
  
  cmdArgs.push(pattern, searchPath);
}

// Execute
const child = spawn(cmd, cmdArgs, { stdio: 'inherit' });

child.on('error', (err) => {
  console.error(`Error: ${err.message}`);
  process.exit(1);
});

child.on('close', (code) => {
  process.exit(code || 0);
});
