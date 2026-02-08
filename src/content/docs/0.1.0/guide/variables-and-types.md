---
title: Variables & Types
description: RuneLang's type system and variable declarations.
slug: 0.1.0/guide/variables-and-types
---

RuneLang is a statically-annotated, dynamically-typed language. You declare the type when creating a variable, and the runtime enforces it.

## Declaring variables

Every variable declaration follows the pattern:

```rune
Type name is value;
```

Variables are **immutable by default**. This is a deliberate design choice — immutability prevents an entire class of bugs.

```rune
Countstone max_hp is 100;
max_hp is written as 200;  // ERROR: cannot reassign immutable variable
```

To make a variable mutable, use the `Mutable` keyword:

```rune
Mutable Countstone current_hp is 100;
current_hp is written as current_hp - 25;  // works
```

The `Enchanted` keyword is an alias for declaring immutable variables explicitly:

```rune
Enchanted Countstone GRAVITY is 10;  // same as without Enchanted
```

## Primitive types

### Countstone (integer)

64-bit signed integers.

```rune
Countstone age is 25;
Countstone damage is -10;
Countstone hex_val is 0xFF;        // 255
Countstone bin_val is 0b1010;      // 10
Countstone big_num is 1_000_000;   // underscores for readability
```

### Potion (float)

64-bit floating point numbers.

```rune
Potion pi is 3.14159;
Potion crit_chance is 0.25;
Potion temperature is -40.0;
```

### Runestone (string)

UTF-8 strings with escape sequences.

```rune
Runestone name is "Gandalf the Grey";
Runestone quote is "He said \"you shall not pass!\"";
Runestone multiline is "line one\nline two";
```

Supported escape sequences: `\n` (newline), `\t` (tab), `\r` (carriage return), `\\` (backslash), `\"` (quote), `\0` (null byte).

### Flagstone (boolean)

Two values: `Truth` and `Falsehood`.

```rune
Flagstone is_alive is Truth;
Flagstone game_over is Falsehood;
```

### Void

The absence of a value. Returned by functions that don't return anything.

```rune
Void nothing is Void;
```

## Collection types

### Scroll (array)

Ordered, indexable collections. See [Scrolls & Tomes](/0.1.0/guide/scrolls-and-tomes/) for full details.

```rune
Scroll heroes is ["Gandalf", "Frodo", "Aragorn"];
Scroll numbers is [1, 2, 3, 4, 5];
Scroll mixed is [42, "hello", Truth];
```

### Tome (map)

Key-value dictionaries. Keys can be strings, integers, or booleans.

```rune
Tome stats is {"str": 18, "dex": 14, "con": 16};
Tome config is {"host": "localhost", "port": 8080};
```

## Special types

### Familiar

Used for Guild instances (objects). When a function takes an object, annotate it as `Familiar`:

```rune
Ritual heal(Familiar target, Countstone amount) begins
    target.health is written as target.health + amount;
end of Ritual
```

### Coffer (byte)

A single byte value (0-255). Useful for binary data.

```rune
Coffer byte_val is 0xFF;
```

### Hex

A type for raw hexadecimal data.

## Assignment

RuneLang supports two assignment syntaxes:

```rune
// full form
x is written as x + 1;

// short form
x is x + 1;
```

Both are equivalent. The full form reads more naturally in verbose code; the short form is concise.

## Type casting

Use `Transmute` to convert between types:

```rune
Runestone age_str is Transmute(25, "Runestone");     // "25"
Countstone num is Transmute("42", "Countstone");     // 42
Countstone truncated is Transmute(3.99, "Countstone"); // 3
```

## Type checking

Use `TypeOf` to inspect a value's type at runtime:

```rune
Chant(TypeOf(42));        // "Countstone"
Chant(TypeOf("hello"));   // "Runestone"
Chant(TypeOf(3.14));      // "Potion"
Chant(TypeOf(Truth));     // "Flagstone"
Chant(TypeOf([1, 2]));    // "Scroll"
```
