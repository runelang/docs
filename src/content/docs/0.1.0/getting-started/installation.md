---
title: Installation
description: How to install RuneLang on your system.
slug: 0.1.0/getting-started/installation
---

RuneLang is distributed as a single binary. No runtime, no package manager, no dependencies.

## Download a release (recommended)

Grab the latest pre-built binary from [GitHub Releases](https://github.com/runelang/runelang/releases).

| Platform              | File                            |
| --------------------- | ------------------------------- |
| Windows (x86\_64)      | `runelang-windows-x86_64.zip`   |
| macOS (Apple Silicon) | `runelang-macos-aarch64.tar.gz` |
| macOS (Intel)         | `runelang-macos-x86_64.tar.gz`  |
| Linux (x86\_64)        | `runelang-linux-x86_64.tar.gz`  |
| Linux (aarch64)       | `runelang-linux-aarch64.tar.gz` |

### Windows

1. Download `runelang-windows-x86_64.zip` from the [latest release](https://github.com/runelang/runelang/releases/latest)
2. Extract `runelang.exe`
3. Move it somewhere on your PATH, or add the folder to your PATH

### macOS

```bash
# Apple Silicon (M1/M2/M3/M4)
curl -LO https://github.com/runelang/runelang/releases/latest/download/runelang-macos-aarch64.tar.gz
tar xzf runelang-macos-aarch64.tar.gz
sudo mv runelang /usr/local/bin/

# Intel
curl -LO https://github.com/runelang/runelang/releases/latest/download/runelang-macos-x86_64.tar.gz
tar xzf runelang-macos-x86_64.tar.gz
sudo mv runelang /usr/local/bin/
```

### Linux

```bash
# x86_64
curl -LO https://github.com/runelang/runelang/releases/latest/download/runelang-linux-x86_64.tar.gz
tar xzf runelang-linux-x86_64.tar.gz
sudo mv runelang /usr/local/bin/

# aarch64 / ARM64
curl -LO https://github.com/runelang/runelang/releases/latest/download/runelang-linux-aarch64.tar.gz
tar xzf runelang-linux-aarch64.tar.gz
sudo mv runelang /usr/local/bin/
```

## Build from source

If you prefer to build from source, RuneLang requires Rust (1.75+). Get it from [rustup.rs](https://rustup.rs).

```bash
# clone the repository
git clone https://github.com/runelang/runelang.git
cd runelang

# build in release mode
cargo build --release

# the binary is at target/release/runelang (or runelang.exe on Windows)
```

## Verify installation

```bash
runelang --version
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

You're installed. Time to [write your first program](/0.1.0/getting-started/quick-start/).
