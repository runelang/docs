---
title: Installation
description: How to install RuneLang on your system.
---

RuneLang is distributed as a single binary. No runtime, no package manager, no dependencies.

## Build from source

RuneLang requires Rust (1.75+) to compile. If you don't have Rust installed, get it from [rustup.rs](https://rustup.rs).

```bash
# clone the repository
git clone https://github.com/runelang/runelang.git
cd runelang

# build in release mode
cargo build --release

# the binary is at target/release/runelang
```

### Add to PATH

To use `runelang` from anywhere:

**Linux / macOS:**

```bash
cp target/release/runelang /usr/local/bin/
```

**Windows (PowerShell):**

```powershell
Copy-Item target\release\runelang.exe C:\Windows\System32\
```

Or add the `target/release` directory to your system PATH.

## Verify installation

```bash
runelang --version
```

You should see:

```
RuneLang 0.1.0
```

## Running programs

**Execute a file:**

```bash
runelang my_program.rune
```

**Start the REPL:**

```bash
runelang
```

The REPL gives you an interactive environment to experiment with RuneLang. Type expressions and see results immediately.

## File extension

RuneLang source files use the `.rune` extension.

```
hello.rune
dungeon.rune
my_module.rune
```

## Next steps

You're installed. Time to [write your first program](/getting-started/quick-start/).
