<div align="center">

<img src="https://raw.githubusercontent.com/vdutts7/squircle/main/webp/eyecli.webp" alt="logo" width="80" height="80" />
<img src="https://raw.githubusercontent.com/vdutts7/squircle/main/webp/bash.webp" alt="logo" width="80" height="80" />
<h1 align="center">eyecli</h1>
<p align="center"><i><b>The eye sees all. Powerful search cli wrapping `ripgrep`, `fd`, `fzf`</b></i></p>

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

- [ripgrep](https://github.com/BurntSushi/ripgrep)- for *file contents* search
- [fd](https://github.com/sharkdp/fd) for *filenames* search

```bash
# macOS
brew install ripgrep fd

# Ubuntu/Debian
apt install ripgrep fd-find

# Windows
choco install ripgrep fd
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

## `$HOME/.eyeignore` file

eyecli supports a `$HOME/.eyeignore` file to customize what gets searched

```bash
# Create starter ignore file
eye init
```

- creates `$HOME/.eyeignore` with sensible defaults (`node_modules`, `.git`, build dirs, etc.)
- edit it to customize.

**Starter template includes:**
- Version control (.git, .svn)
- Dependencies (node_modules, vendor)
- Build output (dist, build, out)
- Lock files (package-lock.json, yarn.lock)
- IDE files (.idea, .vscode)
- Caches (__pycache__, .cache)
- And more...

**Secrets are NOT ignored by default** — uncomment `.env` patterns in `$HOME/.eyeignore` if you want to exclude them.

<br/>

## Roadmap

- [x] Content search with ripgrep
- [x] Filename search with fd
- [x] Extension filtering (`:json`, `:ts,tsx`)
- [x] Tree view output
- [x] Custom ignore file (`~/.eyeignore`)
- [ ] Fuzzy matching (`fzf`)
- [ ] Semantic search 
- [ ] metadata search (exif data, date sorting, provenance, embedded contents, etc)
- [ ] Interactive mode
- [ ] Config file for defaults

<br/>

## Tools Used

[![Node.js][nodejs-badge]][nodejs-url]
[![ripgrep][rg-badge]][rg-url]
[![fd][fd-badge]][fd-url]

<br/>


## Contact

<a href="https://vd7.io"><img src="https://res.cloudinary.com/ddyc1es5v/image/upload/v1773910810/readme-badges/readme-badge-vd7.png" alt="vd7.io" height="40" /></a> &nbsp; <a href="https://x.com/vdutts7"><img src="https://res.cloudinary.com/ddyc1es5v/image/upload/v1773910817/readme-badges/readme-badge-x.png" alt="/vdutts7" height="40" /></a>



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
