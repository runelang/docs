---
title: Quick Start
description: Write your first RuneLang program in under a minute.
---

Let's write a RuneLang program from scratch. Create a file called `hello.rune`:

## Hello, Adventurer

```rune
Chant("Hail, adventurer! Welcome to RuneLang.");
```

Run it:

```bash
runelang hello.rune
```

Output:

```
Hail, adventurer! Welcome to RuneLang.
```

`Chant` is RuneLang's print function. It outputs text to the console.

## Variables

```rune
// immutable by default
Runestone name is "Gandalf";
Countstone level is 20;
Potion crit_chance is 0.15;
Flagstone is_wizard is Truth;

Chant(name + " is level " + level);

// mutable variables require the Mutable keyword
Mutable Countstone health is 100;
health is written as health - 25;
Chant("Health: " + health);
```

## Your first Ritual

Functions in RuneLang are called Rituals:

```rune
Ritual greet(Runestone hero_name) begins
    Chant("Welcome, " + hero_name + "! Your quest awaits.");
end of Ritual

greet("Aragorn");
greet("Legolas");
```

## Control flow

```rune
Mutable Countstone gold is 50;

// quest (if/else)
Quest begins when (gold >= 100)
    Chant("You can afford the legendary sword!");
elsewise when (gold >= 50)
    Chant("You can afford a decent shield.");
elsewise
    Chant("You're broke. Go fight some goblins.");
end of Quest

// odyssey (for loop)
Odyssey for i from 1 to 4 is
    Chant("Round " + i + " - FIGHT!");
end of Odyssey

// vigil (while loop)
Mutable Countstone arrows is 3;
Vigil whilst arrows > 0 is
    Chant("*fires arrow* (" + arrows + " left)");
    arrows is written as arrows - 1;
end of Vigil
```

## Collections

```rune
// scroll (array)
Mutable Scroll inventory is ["Sword", "Shield", "Potion"];
inventory.push("Bow");
Chant("Inventory: " + inventory);
Chant("First item: " + inventory[0]);

// tome (map / dictionary)
Tome stats is {"str": 18, "dex": 14, "con": 16};
Chant("Strength: " + stats["str"]);
```

## Error handling

```rune
Trap begins
    Countstone result is 10 / 0;
Evade (err)
    Chant("Caught error: " + err);
end of Trap
```

## What's next?

You've got the basics. Dive deeper:

- [Variables & Types](/guide/variables-and-types/) — the full type system
- [Control Flow](/guide/control-flow/) — quests, odysseys, vigils, and oracles
- [Rituals & Spells](/guide/rituals-and-spells/) — functions, lambdas, and closures
- [Guilds & Realms](/guide/guilds-and-realms/) — classes and enums
