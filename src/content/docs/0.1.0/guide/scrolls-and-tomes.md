---
title: Scrolls & Tomes
description: Working with arrays (Scrolls) and maps (Tomes) in RuneLang.
slug: 0.1.0/guide/scrolls-and-tomes
---

## Scrolls (arrays)

A `Scroll` is an ordered, indexable collection.

```rune
Scroll heroes is ["Gandalf", "Frodo", "Aragorn"];
Scroll numbers is [1, 2, 3, 4, 5];
Scroll empty is [];
```

### Indexing

Zero-based indexing:

```rune
Chant(heroes[0]);  // "Gandalf"
Chant(heroes[2]);  // "Aragorn"
```

### Slicing

Extract a sub-array with slice syntax `[start:end]`:

```rune
Scroll nums is [10, 20, 30, 40, 50];

Chant(nums[1:3]);   // [20, 30]
Chant(nums[:2]);    // [10, 20]  (from beginning)
Chant(nums[3:]);    // [40, 50]  (to end)
```

Slicing also works on strings:

```rune
Runestone word is "RuneLang";
Chant(word[0:4]);   // "Rune"
Chant(word[4:]);    // "Lang"
```

### Mutation

Scrolls declared with `Mutable` can be modified:

```rune
Mutable Scroll inventory is ["Sword", "Shield"];
inventory.push("Potion");
inventory.pop();
```

### Methods

| Method               | Description                    | Example                                                 |
| -------------------- | ------------------------------ | ------------------------------------------------------- |
| `.push(val)`         | Add element to end             | `list.push("item")`                                     |
| `.pop()`             | Remove and return last element | `list.pop()`                                            |
| `.length()`          | Number of elements             | `list.length()`                                         |
| `.contains(val)`     | Check if element exists        | `list.contains("x")`                                    |
| `.map(fn)`           | Transform each element         | `list.map((Countstone n) => n * 2)`                     |
| `.filter(fn)`        | Keep matching elements         | `list.filter((Countstone n) => n > 0)`                  |
| `.reduce(init, fn)`  | Accumulate a result            | `list.reduce(0, (Countstone a, Countstone b) => a + b)` |
| `.forEach(fn)`       | Execute function on each       | `list.forEach((Runestone s) => Chant(s))`               |
| `.find(fn)`          | First matching element         | `list.find((Countstone n) => n > 10)`                   |
| `.sort()`            | Return sorted copy             | `list.sort()`                                           |
| `.reverse()`         | Return reversed copy           | `list.reverse()`                                        |
| `.flat()`            | Flatten nested arrays          | `[[1,2],[3]].flat()`                                    |
| `.join(sep)`         | Join into string               | `list.join(", ")`                                       |
| `.indexOf(val)`      | Index of first occurrence      | `list.indexOf("x")`                                     |
| `.slice(start, end)` | Extract sub-array (method)     | `list.slice(1, 3)`                                      |

### Iteration

```rune
Scroll heroes is ["Gandalf", "Frodo", "Aragorn"];

// for-each
Odyssey for hero in heroes is
    Chant(hero);
end of Odyssey

// index-based
Odyssey for i from 0 to heroes.length() is
    Chant(i + ": " + heroes[i]);
end of Odyssey
```

### Membership

```rune
Chant("Frodo" in heroes);   // Truth
Chant("Sauron" in heroes);  // Falsehood
```

## Tomes (maps)

A `Tome` is a key-value dictionary. Keys can be strings, integers, or booleans.

```rune
Tome stats is {"str": 18, "dex": 14, "con": 16};
Tome config is {"host": "localhost", "port": 8080, "debug": Truth};
```

### Accessing values

```rune
Chant(stats["str"]);    // 18
Chant(config["host"]);  // "localhost"
```

### Field-style access

If the key is a valid identifier, you can use dot notation:

```rune
Chant(config.host);   // "localhost"
```

### Mutation

```rune
Mutable Tome bag is {"gold": 100};
bag["gold"] is written as bag["gold"] + 50;
bag["gems"] is written as 3;  // adds new key
```

### Methods

| Method          | Description                   | Example               |
| --------------- | ----------------------------- | --------------------- |
| `.keys()`       | Array of all keys             | `stats.keys()`        |
| `.values()`     | Array of all values           | `stats.values()`      |
| `.entries()`    | Array of `[key, value]` pairs | `stats.entries()`     |
| `.has(key)`     | Check if key exists           | `stats.has("str")`    |
| `.length()`     | Number of entries             | `stats.length()`      |
| `.remove(key)`  | Remove and return value       | `stats.remove("dex")` |
| `.merge(other)` | Return merged copy            | `stats.merge(extra)`  |

### Iteration

```rune
Tome stats is {"str": 18, "dex": 14, "con": 16};

// iterate over entries
Odyssey for entry in stats is
    Chant(entry);  // prints ["str", 18], ["dex", 14], etc.
end of Odyssey

// iterate over keys
Odyssey for key in stats.keys() is
    Chant(key + ": " + stats[key]);
end of Odyssey
```

### Membership

The `in` operator checks keys:

```rune
Chant("str" in stats);   // Truth
Chant("wis" in stats);   // Falsehood
```

## Nested collections

Scrolls and Tomes can be nested:

```rune
Scroll party is [
    {"name": "Gandalf", "class": "Wizard", "level": 20},
    {"name": "Aragorn", "class": "Ranger", "level": 15},
    {"name": "Legolas", "class": "Archer", "level": 18}
];

Odyssey for member in party is
    Chant(member["name"] + " the " + member["class"]);
end of Odyssey
```
