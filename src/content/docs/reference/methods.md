---
title: Methods
description: Built-in methods on Runestones (strings), Scrolls (arrays), and Tomes (maps).
---

## Runestone (string) methods

| Method | Returns | Description |
|---|---|---|
| `.length()` | Countstone | Number of characters |
| `.upper()` | Runestone | Uppercase copy |
| `.lower()` | Runestone | Lowercase copy |
| `.trim()` | Runestone | Whitespace stripped from both ends |
| `.contains(sub)` | Flagstone | Whether string contains substring |
| `.starts_with(prefix)` | Flagstone | Whether string starts with prefix |
| `.ends_with(suffix)` | Flagstone | Whether string ends with suffix |
| `.replace(old, new)` | Runestone | Replace all occurrences |
| `.split(sep)` | Scroll | Split into array by separator |
| `.chars()` | Scroll | Split into array of single characters |
| `.indexOf(sub)` | Countstone | Index of first occurrence (-1 if not found) |
| `.repeat(n)` | Runestone | Repeat string n times |
| `.slice(start, end)` | Runestone | Extract substring |

### Examples

```rune
Runestone msg is "  Hello, World!  ";

Chant(msg.trim());                   // "Hello, World!"
Chant(msg.trim().upper());           // "HELLO, WORLD!"
Chant(msg.trim().lower());           // "hello, world!"
Chant(msg.contains("World"));        // Truth
Chant(msg.trim().starts_with("He")); // Truth
Chant(msg.trim().replace("World", "RuneLang"));  // "Hello, RuneLang!"

Scroll words is "one,two,three".split(",");
Chant(words);  // ["one", "two", "three"]

Scroll chars is "abc".chars();
Chant(chars);  // ["a", "b", "c"]

Chant("ha".repeat(3));  // "hahaha"
Chant("hello".indexOf("llo"));  // 2
```

### String slicing

Strings support slice syntax `[start:end]`:

```rune
Runestone word is "RuneLang";
Chant(word[0:4]);   // "Rune"
Chant(word[4:]);    // "Lang"
Chant(word[:4]);    // "Rune"
```

### String repeat with `*`

```rune
Chant("=" * 40);    // "========================================"
Chant("na" * 8);    // "nananananananana"
```

## Scroll (array) methods

### Mutation methods

These modify the array in-place (requires `Mutable`):

| Method | Returns | Description |
|---|---|---|
| `.push(val)` | Void | Append element to end |
| `.pop()` | Value | Remove and return last element |

### Query methods

| Method | Returns | Description |
|---|---|---|
| `.length()` | Countstone | Number of elements |
| `.contains(val)` | Flagstone | Whether array contains value |
| `.indexOf(val)` | Countstone | Index of first occurrence (-1 if not found) |

### Higher-order methods

These take a function (Spell/lambda) as an argument and return new values:

| Method | Returns | Description |
|---|---|---|
| `.map(fn)` | Scroll | Transform each element |
| `.filter(fn)` | Scroll | Keep elements where fn returns truthy |
| `.reduce(init, fn)` | Value | Accumulate with fn(accumulator, element) |
| `.forEach(fn)` | Void | Execute fn on each element (side effects) |
| `.find(fn)` | Value | First element where fn returns truthy |

### Transform methods

| Method | Returns | Description |
|---|---|---|
| `.sort()` | Scroll | New sorted array (ascending) |
| `.reverse()` | Scroll | New reversed array |
| `.flat()` | Scroll | Flatten one level of nesting |
| `.join(sep)` | Runestone | Join elements into string with separator |
| `.slice(start, end)` | Scroll | Extract sub-array |

### Examples

```rune
Scroll nums is [5, 3, 8, 1, 9, 2, 7, 4, 6];

// higher-order methods
Scroll doubled is nums.map((Countstone n) => n * 2);
Chant(doubled);  // [10, 6, 16, 2, 18, 4, 14, 8, 12]

Scroll big is nums.filter((Countstone n) => n > 5);
Chant(big);  // [8, 9, 7, 6]

Countstone sum is nums.reduce(0, (Countstone acc, Countstone n) => acc + n);
Chant(sum);  // 45

Countstone first_big is nums.find((Countstone n) => n > 7);
Chant(first_big);  // 8

// transform methods
Chant(nums.sort());      // [1, 2, 3, 4, 5, 6, 7, 8, 9]
Chant(nums.reverse());   // [6, 4, 7, 2, 9, 1, 8, 3, 5]
Chant(nums.indexOf(8));  // 2

// join
Chant(["a", "b", "c"].join(" -> "));  // "a -> b -> c"

// flat
Scroll nested is [[1, 2], [3, 4], [5]];
Chant(nested.flat());  // [1, 2, 3, 4, 5]

// slice
Chant(nums.slice(2, 5));  // [8, 1, 9]
```

### Array slicing

Arrays support slice syntax `[start:end]`:

```rune
Scroll items is [10, 20, 30, 40, 50];
Chant(items[1:3]);   // [20, 30]
Chant(items[:2]);    // [10, 20]
Chant(items[3:]);    // [40, 50]
```

## Tome (map) methods

| Method | Returns | Description |
|---|---|---|
| `.keys()` | Scroll | Array of all keys |
| `.values()` | Scroll | Array of all values |
| `.entries()` | Scroll | Array of `[key, value]` pairs |
| `.has(key)` | Flagstone | Whether key exists |
| `.length()` | Countstone | Number of entries |
| `.remove(key)` | Value | Remove key and return its value |
| `.merge(other)` | Tome | Return new Tome with entries from both |

### Examples

```rune
Tome hero is {"name": "Thorin", "class": "Warrior", "level": 15};

Chant(hero.keys());      // ["name", "class", "level"]
Chant(hero.values());    // ["Thorin", "Warrior", 15]
Chant(hero.entries());   // [["name", "Thorin"], ["class", "Warrior"], ["level", 15]]
Chant(hero.has("name")); // Truth
Chant(hero.has("mana")); // Falsehood
Chant(hero.length());    // 3

// merge creates a new tome
Tome extra is {"weapon": "Axe", "level": 20};
Tome merged is hero.merge(extra);
Chant(merged);
// {"name": "Thorin", "class": "Warrior", "level": 20, "weapon": "Axe"}
// note: "level" was overwritten by the second tome's value
```
