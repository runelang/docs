---
title: Hello World
description: A complete introductory example covering RuneLang's core features.
slug: 0.1.0/examples/hello-world
---

This example demonstrates variables, functions, control flow, loops, arrays, maps, pattern matching, lambdas, string methods, and error handling.

```rune
// the classic
Chant("Hail, adventurer! Welcome to RuneLang.");

// variables
Mutable Countstone health is 100;
Runestone name is "Aragorn";
Potion crit_chance is 0.25;
Flagstone is_alive is Truth;

Chant("Hero: " + name);
Chant("Health: " + health);
Chant("Crit chance: " + crit_chance);
Chant("Alive: " + is_alive);

// arithmetic
Countstone damage is 25;
health is written as health - damage;
Chant("After taking " + damage + " damage, health is " + health);

// quest (if/else)
Quest begins when (health > 50)
    Chant("Still standing strong!");
elsewise when (health > 0)
    Chant("Wounded but fighting!");
elsewise
    Chant("Fallen in battle...");
end of Quest

// odyssey (for loop)
Chant("\nCounting down to battle:");
Odyssey for i from 1 to 6 is
    Chant("  Round " + i + "...");
end of Odyssey

// vigil (while loop)
Mutable Countstone arrows is 3;
Chant("\nFiring arrows:");
Vigil whilst arrows > 0 is
    Chant("  *twang* (" + arrows + " remaining)");
    arrows is written as arrows - 1;
end of Vigil

// scroll (array)
Mutable Scroll inventory is ["Sword", "Shield", "Potion"];
Chant("\nInventory: " + inventory);
inventory.push("Bow");
Chant("After finding a bow: " + inventory);
Chant("First item: " + inventory[0]);

// tome (map)
Tome stats is {"str": 18, "dex": 14, "con": 16};
Chant("\nStats: " + stats);

// ritual (function)
Ritual battle_cry(Runestone hero_name, Countstone power) begins
    Chant(hero_name + " unleashes a battle cry with power " + power + "!");
    returneth power * 2;
end of Ritual

Countstone boosted is battle_cry(name, 42);
Chant("Boosted power: " + boosted);

// oracle (pattern matching)
Countstone roll is 3;
Chant("\nRolled a " + roll + ":");
Oracle reveals (roll)
    fate 1: Chant("  Critical failure!");
    fate 2: Chant("  Miss!");
    fate 3: Chant("  Hit!");
    fate 4: Chant("  Critical hit!");
    elsewise: Chant("  Unknown roll.");
end of Oracle

// spell (lambda)
Spell double is (Countstone x) => x * 2;
Chant("\nDouble of 21: " + double(21));

// string methods
Runestone greeting is "hello world";
Chant("\nUpper: " + greeting.upper());
Chant("Contains 'world': " + greeting.contains("world"));

// trap/evade (error handling)
Trap begins
    Countstone result is 10 / 0;
Evade (err)
    Chant("\nCaught error: " + err);
end of Trap

Chant("\nQuest complete.");
```

### Output

```
Hail, adventurer! Welcome to RuneLang.
Hero: Aragorn
Health: 100
Crit chance: 0.25
Alive: Truth
After taking 25 damage, health is 75
Still standing strong!

Counting down to battle:
  Round 1...
  Round 2...
  Round 3...
  Round 4...
  Round 5...

Firing arrows:
  *twang* (3 remaining)
  *twang* (2 remaining)
  *twang* (1 remaining)

Inventory: ["Sword", "Shield", "Potion"]
After finding a bow: ["Sword", "Shield", "Potion", "Bow"]
First item: Sword

Stats: {"str": 18, "dex": 14, "con": 16}
Aragorn unleashes a battle cry with power 42!
Boosted power: 84

Rolled a 3:
  Hit!

Double of 21: 42

Upper: HELLO WORLD
Contains 'world': Truth

Caught error: division by zero - the void consumes all

Quest complete.
```
