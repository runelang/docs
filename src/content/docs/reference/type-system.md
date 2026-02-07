---
title: Type System
description: Complete reference for RuneLang's type system.
---

RuneLang uses type annotations on declarations with dynamic dispatch at runtime. Every variable must declare its type, and the runtime enforces type safety during execution.

## Type table

| RuneLang type | Traditional name | Rust equivalent | Size            | Example              |
| ------------- | ---------------- | --------------- | --------------- | -------------------- |
| `Countstone`  | Integer          | `i64`           | 64-bit signed   | `42`, `-7`, `0xFF`   |
| `Potion`      | Float            | `f64`           | 64-bit IEEE 754 | `3.14`, `-0.5`       |
| `Runestone`   | String           | `String`        | UTF-8, heap     | `"hello"`            |
| `Flagstone`   | Boolean          | `bool`          | 1 bit           | `Truth`, `Falsehood` |
| `Scroll`      | Array            | `Vec<Value>`    | Dynamic         | `[1, 2, 3]`          |
| `Tome`        | Map / Dict       | `Vec<(K, V)>`   | Ordered         | `{"a": 1}`           |
| `Coffer`      | Byte             | `u8`            | 8-bit unsigned  | byte values          |
| `Hex`         | Hex data         | —               | —               | raw hex              |
| `Familiar`    | Object / Any     | —               | Reference       | Guild instances      |
| `Void`        | None / null      | `()`            | Zero            | `Void`               |

## Literals

### Countstone (integer)

```rune
42              // decimal
-7              // negative
0xFF            // hexadecimal (255)
0b1010          // binary (10)
1_000_000       // underscore separators (1000000)
```

### Potion (float)

```rune
3.14
-0.001
100.0
```

### Runestone (string)

```rune
"hello world"
"line one\nline two"
"tab\there"
"quote: \"hi\""
"backslash: \\"
"null byte: \0"
```

### Flagstone (boolean)

```rune
Truth
Falsehood
```

### Scroll (array)

```rune
[]                          // empty
[1, 2, 3]                  // integers
["a", "b", "c"]            // strings
[1, "mixed", Truth, 3.14]  // mixed types
[[1, 2], [3, 4]]           // nested
```

### Tome (map)

```rune
{}                              // empty
{"name": "Gandalf", "level": 20}
{1: "one", 2: "two"}           // integer keys
```

Keys must be Countstone, Runestone, or Flagstone. Values can be any type.

### Void

```rune
Void
```

## Truthiness

Values have truthiness when used in conditions:

| Type            | Truthy        | Falsy        |
| --------------- | ------------- | ------------ |
| Flagstone       | `Truth`       | `Falsehood`  |
| Countstone      | any non-zero  | `0`          |
| Potion          | any non-zero  | `0.0`        |
| Runestone       | any non-empty | `""`         |
| Scroll          | any non-empty | `[]`         |
| Void            | —             | always falsy |
| Everything else | always truthy | —            |

## Type coercion

RuneLang has **no implicit type coercion**. This is a deliberate safety feature.

```rune
// JavaScript: "5" + 3 === "53"     (string)
// JavaScript: "5" - 3 === 2        (number)
// RuneLang: "5" + 3 === "53"       (string concatenation is explicit)
// RuneLang: "5" - 3 === ERROR      (type error)
```

The only exception is string concatenation with `+`, which converts the right operand to a string when the left operand is a Runestone.

Use `Transmute` for explicit conversions:

```rune
Countstone n is Transmute("42", "Countstone");   // 42
Runestone s is Transmute(42, "Runestone");        // "42"
Countstone i is Transmute(3.99, "Countstone");    // 3 (truncates)
Potion f is Transmute(42, "Potion");              // 42.0
```

## Mutability

All variables are **immutable by default**:

```rune
Countstone x is 5;
x is written as 10;  // ERROR: cannot reassign enchanted (immutable) rune
```

Use `Mutable` to opt in:

```rune
Mutable Countstone x is 5;
x is written as 10;  // works
```

This applies to all types, including Scrolls and Tomes. However, note that collection _contents_ can be modified through methods (`.push()`, etc.) even on immutable bindings — the immutability applies to the variable binding, not the collection's internal data.
