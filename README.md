<div align="center">

<img src="https://raw.githubusercontent.com/vdutts7/squircle/main/webp/eyecli.webp" alt="logo" width="80" height="80" />
<img src="https://raw.githubusercontent.com/vdutts7/squircle/main/webp/npm.webp" alt="logo" width="80" height="80" />

<h1 align="center">eyecli</h1>
<p align="center"><i><b>The eye sees all. Powerful search CLI wrapping `ripgrep` and `fd` (`fzf` + semantic search coming soon). </b></i></p>

[![Github][github]][github-url]
[![npm][npm]][npm-url]

</div>

<br/>
 
## Table of Contents

<ol>
    <a href="#about">About</a><br/>
    <a href="#install">Install</a><br/>
    <a href="#usage">Usage</a><br/>
    <a href="#ignore-file">Ignore File</a><br/>
    <a href="#roadmap">Roadmap</a><br/>
    <a href="#tools-used">Tools used</a><br/>
    <a href="#contact">Contact</a>
</ol>

<br/>

## About

- **Smart defaults**:
    - hidden files included (`.gitignore`, `.env`, etc files "not respected")
    - case-insensitive
- **Fast**:
    - powered by `ripgrep` and `fd`
- **Extension filter**:
    - `:json`, `:ts,tsx` syntax for quick file type filtering
- **Tree view**:
    — visualize results as dir tree
- **Customizable**:
    — `~/.eyeignore` for personal ignore patterns

<br/>

## Install

```bash
npm i -g @vd7/eyecli
```

### Requirements

- [ripgrep](https://github.com/BurntSushi/ripgrep) — for content search
- [fd](https://github.com/sharkdp/fd) — for filename search

```bash
# macOS
brew install ripgrep fd

# Ubuntu/Debian
apt install ripgrep fd-find

# Windows
choco install ripgrep fd
```

### From source (optional)

```bash
git clone https://github.com/vdutts7/eyecli.git
cd eyecli
npm i -g .
```

<br/>

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

### Examples

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

# Create ignore file
eye init
```

<br/>

## `~/.eyeignore` file

eyecli supports a `~/.eyeignore` file to customize what gets searched

```bash
# Create starter ignore file
eye init
```

This creates `~/.eyeignore` with sensible defaults (node_modules, .git, build dirs, etc.). Edit it to customize.

**Starter template includes:**
- Version control (.git, .svn)
- Dependencies (node_modules, vendor)
- Build output (dist, build, out)
- Lock files (package-lock.json, yarn.lock)
- IDE files (.idea, .vscode)
- Caches (__pycache__, .cache)
- And more...

**Secrets are NOT ignored by default** — uncomment `.env` patterns in `~/.eyeignore` if you want to exclude them.

<br/>

## Roadmap

- [x] Content search with ripgrep
- [x] Filename search with fd
- [x] Extension filtering (`:json`, `:ts,tsx`)
- [x] Tree view output
- [x] Custom ignore file (`~/.eyeignore`)
- [ ] Fuzzy matching (`fzf`)
- [ ] Semantic search
- [ ] Interactive mode
- [ ] Config file for defaults

<br/>

## Tools Used

[![Node.js][nodejs-badge]][nodejs-url]
[![ripgrep][rg-badge]][rg-url]
[![fd][fd-badge]][fd-url]

<br/>

## Contact

<a href="https://vd7.io"><img src="https://img.shields.io/badge/website-000000?style=for-the-badge&logo=data:image/webp;base64,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&logoColor=white" alt="website" /></a>
<a href="https://x.com/vdutts7"><img src="https://img.shields.io/badge/vdutts7-000000?style=for-the-badge&logo=X&logoColor=white" alt="Twitter" /></a>

<!-- BADGES -->
[github]: https://img.shields.io/badge/💻_eyecli-000000?style=for-the-badge
[github-url]: https://github.com/vdutts7/eyecli
[npm]: https://img.shields.io/badge/npm-@vd7/eyecli-CB3837?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/package/@vd7/eyecli
[nodejs-badge]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[nodejs-url]: https://nodejs.org
[rg-badge]: https://img.shields.io/badge/ripgrep-4B275F?style=for-the-badge&logo=rust&logoColor=white
[rg-url]: https://github.com/BurntSushi/ripgrep
[fd-badge]: https://img.shields.io/badge/fd-4B275F?style=for-the-badge&logo=rust&logoColor=white
[fd-url]: https://github.com/sharkdp/fd
