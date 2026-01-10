# 👁️ eyecli

**The Eye sees EVERYTHING.** A powerful search CLI wrapping ripgrep and fd with smart defaults.

## Install

```bash
npm install -g eyecli
```

### Requirements

- [ripgrep](https://github.com/BurntSushi/ripgrep) - for content search
- [fd](https://github.com/sharkdp/fd) - for filename search

```bash
# macOS
brew install ripgrep fd

# Ubuntu/Debian
apt install ripgrep fd-find

# Windows
choco install ripgrep fd
```

## Usage

```bash
# Search file contents
eye "pattern" [path]

# Search filenames
eye -f "pattern" [path]

# Find by extension
eye :json .
eye :ts,tsx ~/code

# Options
eye -c "pattern" .        # Count matches
eye -t :json .            # Tree view
eye -E node_modules "TODO" .  # Exclude paths
```

## Examples

```bash
# Find all TODOs in current directory
eye "TODO" .

# Find config files
eye -f "config" ~/projects

# Find all JSON files
eye :json ~/projects

# Count TypeScript files
eye :ts,tsx src -c

# Search excluding node_modules
eye -E node_modules "import" .
```

## Why?

- 🔍 **Smart defaults** - hidden files included, case-insensitive, no .gitignore restrictions
- 🚀 **Fast** - powered by ripgrep and fd
- 📁 **Extension filter** - `:json`, `:ts,tsx` syntax for quick file type filtering
- 🌳 **Tree view** - visualize results as directory tree

## License

MIT
