<div align="center">

<h1 align="center">👁️ eyecli</h1>
<p align="center"><i><b>The Eye sees EVERYTHING. A powerful search CLI wrapping ripgrep and fd.</b></i></p>

[![Github][github]][github-url]
[![npm][npm]][npm-url]

</div>

<br/>

## Table of Contents

<ol>
    <a href="#about">📝 About</a><br/>
    <a href="#install">💻 Install</a><br/>
    <a href="#usage">🚀 Usage</a><br/>
    <a href="#ignore-file">📄 Ignore File</a><br/>
    <a href="#roadmap">🗺️ Roadmap</a><br/>
    <a href="#tools-used">🔧 Tools used</a><br/>
    <a href="#contact">👤 Contact</a>
</ol>

<br/>

## 📝About

Smart defaults for searching. Hidden files included, case-insensitive, no .gitignore restrictions.

- **🔍 Smart defaults** - hidden files included, case-insensitive, no .gitignore restrictions
- **🚀 Fast** - powered by ripgrep and fd
- **📁 Extension filter** - `:json`, `:ts,tsx` syntax for quick file type filtering
- **🌳 Tree view** - visualize results as directory tree
- **⚙️ Customizable** - `~/.eyeignore` for personal ignore patterns

<br/>

## 💻Install

```bash
npm i -g @vd7/eyecli
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

<br/>

## 🚀Usage

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

## 📄Ignore File

Eye supports a `~/.eyeignore` file to customize what gets searched.

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

**Secrets are NOT ignored by default** - uncomment `.env` patterns in `~/.eyeignore` if you want to exclude them.

<br/>

## 🗺️Roadmap

- [x] Content search with ripgrep
- [x] Filename search with fd
- [x] Extension filtering (`:json`, `:ts,tsx`)
- [x] Tree view output
- [x] Custom ignore file (`~/.eyeignore`)
- [ ] Fuzzy matching
- [ ] Interactive mode
- [ ] Config file for defaults

<br/>

## 🔧Tools Used

[![Node.js][nodejs-badge]][nodejs-url]
[![ripgrep][rg-badge]][rg-url]
[![fd][fd-badge]][fd-url]

<br/>

## 👤Contact

[![Email][email]][email-url]
[![Twitter][twitter]][twitter-url]

<!-- BADGES -->
[github]: https://img.shields.io/badge/💻_eyecli-000000?style=for-the-badge
[github-url]: https://github.com/vdutts/eyecli
[npm]: https://img.shields.io/badge/npm-@vd7/eyecli-CB3837?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/package/@vd7/eyecli
[nodejs-badge]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[nodejs-url]: https://nodejs.org
[rg-badge]: https://img.shields.io/badge/ripgrep-4B275F?style=for-the-badge&logo=rust&logoColor=white
[rg-url]: https://github.com/BurntSushi/ripgrep
[fd-badge]: https://img.shields.io/badge/fd-4B275F?style=for-the-badge&logo=rust&logoColor=white
[fd-url]: https://github.com/sharkdp/fd
[email]: https://img.shields.io/badge/Email-000000?style=for-the-badge&logo=Gmail&logoColor=white
[email-url]: mailto:me@vd7.io
[twitter]: https://img.shields.io/badge/Twitter-000000?style=for-the-badge&logo=Twitter&logoColor=white
[twitter-url]: https://x.com/vdutts7
