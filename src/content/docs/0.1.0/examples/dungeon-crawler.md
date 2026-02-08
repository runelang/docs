---
title: Dungeon Crawler
description: A complete dungeon crawler game demonstrating OOP, combat, and game
  logic in RuneLang.
slug: 0.1.0/examples/dungeon-crawler
---

This example builds a full dungeon crawler with Hero and Monster Guilds, a combat system, loot drops, and a multi-encounter quest.

```rune
// dungeon crawler in runelang

Guild Hero is
    Runestone name;
    Mutable Countstone health;
    Countstone attack;
    Mutable Scroll inventory;

    Ritual new(Runestone n, Countstone hp, Countstone atk) begins
        thy.name is n;
        thy.health is hp;
        thy.attack is atk;
        thy.inventory is [];
    end of Ritual

    Ritual strike(Familiar target) begins
        Chant(thy.name + " strikes " + target.name + " for " + thy.attack + " damage!");
        target.health is written as target.health - thy.attack;
    end of Ritual

    Ritual isAlive() -> Flagstone begins
        returneth thy.health > 0;
    end of Ritual

    Ritual loot(Runestone item) begins
        thy.inventory.push(item);
        Chant(thy.name + " looted: " + item);
    end of Ritual

    Ritual status() begins
        Chant("--- " + thy.name + " ---");
        Chant("  HP: " + thy.health);
        Chant("  ATK: " + thy.attack);
        Chant("  Inventory: " + thy.inventory);
    end of Ritual
end of Guild

Guild Monster is
    Runestone name;
    Mutable Countstone health;
    Countstone attack;
    Runestone loot_drop;

    Ritual new(Runestone n, Countstone hp, Countstone atk, Runestone loot) begins
        thy.name is n;
        thy.health is hp;
        thy.attack is atk;
        thy.loot_drop is loot;
    end of Ritual

    Ritual strike(Familiar target) begins
        Chant(thy.name + " claws at " + target.name + " for " + thy.attack + " damage!");
        target.health is written as target.health - thy.attack;
    end of Ritual

    Ritual isAlive() -> Flagstone begins
        returneth thy.health > 0;
    end of Ritual
end of Guild

Ritual battle(Familiar hero, Familiar monster) begins
    Chant("\n=============================");
    Chant("A wild " + monster.name + " appears!");
    Chant("=============================");

    Mutable Countstone round is 1;
    Vigil whilst hero.isAlive() and monster.isAlive() is
        Chant("\n-- Round " + round + " --");
        hero.strike(monster);

        Quest begins when (not monster.isAlive())
            Chant(monster.name + " has been slain!");
            hero.loot(monster.loot_drop);
            returneth Truth;
        end of Quest

        monster.strike(hero);

        Quest begins when (not hero.isAlive())
            Chant(hero.name + " has fallen!");
            returneth Falsehood;
        end of Quest

        round is written as round + 1;
    end of Vigil

    returneth Falsehood;
end of Ritual

// create our hero
Familiar player is summon Hero("Thorin", 100, 30);
player.status();

// dungeon encounters
Scroll monsters is [
    summon Monster("Goblin", 40, 8, "Rusty Dagger"),
    summon Monster("Skeleton", 60, 12, "Bone Shield"),
    summon Monster("Dragon", 90, 20, "Dragon Scale")
];

Mutable Countstone victories is 0;
Odyssey for i from 0 to 3 is
    Familiar enemy is monsters[i];
    Flagstone won is battle(player, enemy);
    Quest begins when (won)
        victories is written as victories + 1;
    elsewise
        Chant("\nGAME OVER");
        Flee;
    end of Quest
end of Odyssey

Chant("\n=============================");
Chant("QUEST COMPLETE");
Chant("Victories: " + victories + "/3");
player.status();
Chant("=============================");
```

### Output

```
--- Thorin ---
  HP: 100
  ATK: 30
  Inventory: []

=============================
A wild Goblin appears!
=============================

-- Round 1 --
Thorin strikes Goblin for 30 damage!
Goblin claws at Thorin for 8 damage!

-- Round 2 --
Thorin strikes Goblin for 30 damage!
Goblin has been slain!
Thorin looted: Rusty Dagger

=============================
A wild Skeleton appears!
=============================

-- Round 1 --
Thorin strikes Skeleton for 30 damage!
Skeleton claws at Thorin for 12 damage!

-- Round 2 --
Thorin strikes Skeleton for 30 damage!
Skeleton has been slain!
Thorin looted: Bone Shield

=============================
A wild Dragon appears!
=============================

-- Round 1 --
Thorin strikes Dragon for 30 damage!
Dragon claws at Thorin for 20 damage!

-- Round 2 --
Thorin strikes Dragon for 30 damage!
Dragon claws at Thorin for 20 damage!

-- Round 3 --
Thorin strikes Dragon for 30 damage!
Dragon has been slain!
Thorin looted: Dragon Scale

=============================
QUEST COMPLETE
Victories: 3/3
--- Thorin ---
  HP: 40
  ATK: 30
  Inventory: ["Rusty Dagger", "Bone Shield", "Dragon Scale"]
=============================
```

### Concepts demonstrated

* **Guild** declarations with fields, constructors, and methods
* **Mutable** fields on Guild instances
* **Familiar** type for passing objects between functions
* **Vigil** (while loop) for combat rounds
* **Quest** (if/else) for branching logic
* **Odyssey** (for loop) for iterating encounters
* **Flee** (break) for early exit
* **returneth** for function return values
* **Method calls** on objects (`player.strike(enemy)`)
* **Field access** (`monster.name`, `thy.health`)
