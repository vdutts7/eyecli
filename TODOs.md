# TODOs

<!-- macos-trace: traces fd can't see (path-only) -->
- [ ] Keychain (binary; refs in label/service) → Keychain Access or `security dump-keychain … | strings | grep -i PATTERN`
- [ ] SQLite/.vscdb/.db (path in column, not filename) → `rg -i -l PATTERN ~/Library --glob '*.{sqlite,vscdb,db}'`
- [ ] Plists/caches (path embedded in content) → `rg -i -l PATTERN ~/Library` (slow)
- [ ] Add `--content` or keychain/DB pass to trace (or separate script)
<!--  -->

<!-- same for rg as for fd -->