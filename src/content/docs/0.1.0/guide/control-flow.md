---
title: Control Flow
description: Quests, Odysseys, Vigils, and Oracles — RuneLang's control flow constructs.
slug: 0.1.0/guide/control-flow
---

## Quest (if / else if / else)

The `Quest` is RuneLang's conditional branching construct.

```rune
Quest begins when (health > 50)
    Chant("Still standing strong!");
elsewise when (health > 0)
    Chant("Wounded but fighting!");
elsewise
    Chant("Fallen in battle...");
end of Quest
```

Each branch is guarded by `when (condition)`. The `elsewise` branch at the end catches everything else. Both `elsewise when` and the final `elsewise` are optional.

```rune
// minimal quest - just one branch
Quest begins when (is_poisoned)
    Chant("You feel the venom spreading...");
end of Quest
```

### Nested quests

Quests can be nested freely:

```rune
Quest begins when (player.isAlive())
    Quest begins when (enemy.isAlive())
        Chant("The battle continues!");
    elsewise
        Chant("Enemy defeated!");
    end of Quest
elsewise
    Chant("Game over.");
end of Quest
```

## Odyssey (for loop)

The `Odyssey` is a counted loop, iterating from a start value to an end value (exclusive).

### Range-based

```rune
// prints 0, 1, 2, 3, 4
Odyssey for i from 0 to 5 is
    Chant(i);
end of Odyssey
```

The end value is **exclusive** — `from 0 to 5` runs for `0, 1, 2, 3, 4`.

### With step

Use `by` to set the step size:

```rune
// prints 0, 2, 4, 6, 8
Odyssey for i from 0 to 10 by 2 is
    Chant(i);
end of Odyssey

// counting backwards
Odyssey for i from 10 to 0 by -1 is
    Chant(i);
end of Odyssey
```

### For-each

Iterate over a collection with `in`:

```rune
Scroll party is ["Gandalf", "Frodo", "Aragorn"];

Odyssey for hero in party is
    Chant("  " + hero + " joins the quest!");
end of Odyssey
```

Works with strings (iterates over characters), Scrolls (arrays), and Tomes (iterates over `[key, value]` pairs):

```rune
// iterate over characters
Odyssey for ch in "hello" is
    Chant(ch);
end of Odyssey

// iterate over tome entries
Tome stats is {"str": 18, "dex": 14};
Odyssey for entry in stats is
    Chant(entry);  // prints ["str", 18] then ["dex", 14]
end of Odyssey
```

## Vigil (while loop)

The `Vigil` loops while a condition remains true.

```rune
Mutable Countstone arrows is 5;

Vigil whilst arrows > 0 is
    Chant("*fires arrow* (" + arrows + " remaining)");
    arrows is written as arrows - 1;
end of Vigil
```

## Oracle (pattern matching)

The `Oracle` is RuneLang's pattern matching construct, similar to `switch`/`case` or `match`.

```rune
Countstone roll is Roll(1, 20);

Oracle reveals (roll)
    fate 1: Chant("Critical failure!");
    fate 20: Chant("CRITICAL HIT!");
    fate 10: Chant("Solid hit.");
    elsewise: Chant("You rolled a " + roll);
end of Oracle
```

Each `fate` matches a specific value. The `elsewise` clause handles any unmatched values.

Multiple statements can follow a `fate`:

```rune
Oracle reveals (player_class)
    fate "warrior":
        Chant("You draw your sword.");
        damage is written as damage + 5;
    fate "mage":
        Chant("You prepare a spell.");
        damage is written as damage + 10;
    fate "rogue":
        Chant("You strike from the shadows.");
        damage is written as damage + 7;
    elsewise:
        Chant("Unknown class.");
end of Oracle
```

## Flee and Persist

`Flee` breaks out of a loop. `Persist` skips to the next iteration.

```rune
Odyssey for i from 0 to 100 is
    Quest begins when (i % 2 matches 0)
        Persist;  // skip even numbers
    end of Quest

    Quest begins when (i > 10)
        Flee;  // stop after 10
    end of Quest

    Chant(i);  // prints 1, 3, 5, 7, 9
end of Odyssey
```

Both work inside `Odyssey` and `Vigil` loops.
