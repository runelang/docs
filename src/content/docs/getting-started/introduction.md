---
title: Introduction
description: What is RuneLang and why should you care?
---

RuneLang is a general-purpose programming language with a fantasy RPG-inspired syntax. It compiles to bytecode and runs on a high-performance virtual machine, delivering execution speeds competitive with Python and faster than Node.js on most workloads.

## Philosophy

RuneLang is built on three principles:

1. **Performance without compromise.** The bytecode VM is written in pure Rust with aggressive optimizations. No garbage collector pauses, no JIT warmup. Your code runs fast from the first line.

2. **Safety by default.** Variables are immutable unless you explicitly opt in with `Mutable`. There's no implicit type coercion, no `undefined`, no `null`. When something goes wrong, you get a clear error — not silent corruption.

3. **Code should be fun.** Every keyword in RuneLang tells a story. Functions are Rituals. Classes are Guilds. Loops are Odysseys. You're not just writing software — you're crafting spells.

## What does it look like?

```rune
// variables are immutable by default
Countstone max_health is 100;
Mutable Countstone current_health is max_health;

// functions are rituals
Ritual heal(Mutable Countstone hp, Countstone amount) begins
    hp is written as Min(hp + amount, max_health);
    Chant("Healed! HP: " + hp);
end of Ritual

// conditionals are quests
Quest begins when (current_health < 50)
    Chant("You need healing!");
    heal(current_health, 30);
elsewise
    Chant("You're looking strong.");
end of Quest
```

## Feature overview

| Feature                  | RuneLang                           | Python           | JavaScript        |
| ------------------------ | ---------------------------------- | ---------------- | ----------------- |
| Immutable by default     | Yes                                | No               | `const` only      |
| Type annotations         | Yes                                | Optional (hints) | TypeScript needed |
| Pattern matching         | `Oracle`                           | `match` (3.10+)  | No native support |
| Classes with inheritance | `Guild`                            | `class`          | `class`           |
| Enums                    | `Realm`                            | `Enum` class     | No native support |
| Lambda expressions       | `Spell`                            | `lambda`         | Arrow functions   |
| Error handling           | `Trap`/`Evade`                     | `try`/`except`   | `try`/`catch`     |
| Module system            | `summon`                           | `import`         | `import`          |
| Zero dependencies        | Yes                                | No (stdlib)      | No (V8/runtime)   |
| File I/O                 | Built-in                           | Built-in         | Requires `fs`     |
| Higher-order methods     | `.map()`, `.filter()`, `.reduce()` | Built-in         | Built-in          |

## Who is it for?

- **Developers** who want a scripting language that's fast and safe without being verbose.
- **Learners** who want a fun, memorable way to understand programming concepts.
- **Hobbyists** who want to build games, tools, and experiments with a language that has personality.
- **Anyone** who's tired of the same old syntax and wants something fresh.

## Next steps

Ready to get started? [Install RuneLang](/getting-started/installation/) and write your first program in under a minute.
