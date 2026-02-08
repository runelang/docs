---
title: Modules
description: Splitting code across files with RuneLang's module system.
slug: 0.1.0/guide/modules
---

## Importing modules

Use `summon` to import another `.rune` file:

```rune
summon "math_utils.rune";
summon "models/hero.rune";
```

When a file is summoned, its entire contents are executed in the current scope. All Rituals, Guilds, Realms, and variables defined in the summoned file become available.

## How it works

Given two files:

**utils.rune:**

```rune
Ritual double(Countstone x) begins
    returneth x * 2;
end of Ritual

Ritual clamp(Countstone val, Countstone low, Countstone high) begins
    Quest begins when (val < low)
        returneth low;
    elsewise when (val > high)
        returneth high;
    end of Quest
    returneth val;
end of Ritual
```

**main.rune:**

```rune
summon "utils.rune";

Countstone result is double(21);
Chant(result);  // 42

Countstone clamped is clamp(150, 0, 100);
Chant(clamped);  // 100
```

Run with:

```bash
runelang main.rune
```

## File resolution

Paths are resolved relative to the file doing the importing:

```
project/
  main.rune            <- summon "lib/helpers.rune"
  lib/
    helpers.rune        <- summon "utils.rune"  (resolves to lib/utils.rune)
    utils.rune
```

## Deduplication

If the same file is summoned multiple times (directly or transitively), it's only executed once. This prevents duplicate definitions and circular import issues.

```rune
// both of these import utils.rune, but it only runs once
summon "utils.rune";
summon "utils.rune";  // no-op
```

## Organizing a project

A typical RuneLang project might look like:

```
my_game/
  main.rune
  models/
    hero.rune
    monster.rune
    item.rune
  utils/
    math.rune
    format.rune
  data/
    levels.rune
```

**main.rune:**

```rune
summon "models/hero.rune";
summon "models/monster.rune";
summon "models/item.rune";
summon "utils/math.rune";

Familiar player is summon Hero("Thorin", 100, 30);
// ...
```

Note: `summon` has two uses in RuneLang:

1. **`summon "file.rune";`** — imports a module (file path as a string)
2. **`summon GuildName(args)`** — creates a Guild instance (constructor call)

The parser distinguishes between these by checking whether the argument is a string literal (module import) or an identifier (Guild instantiation).
