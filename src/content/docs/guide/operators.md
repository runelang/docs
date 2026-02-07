---
title: Operators
description: Arithmetic, comparison, logical, bitwise, and special operators in RuneLang.
---

## Arithmetic

| Operator | Description                     | Example            |
| -------- | ------------------------------- | ------------------ |
| `+`      | Addition / string concatenation | `5 + 3` → `8`      |
| `-`      | Subtraction                     | `10 - 4` → `6`     |
| `*`      | Multiplication / string repeat  | `3 * 4` → `12`     |
| `/`      | Division                        | `10 / 3` → `3`     |
| `%`      | Modulo                          | `10 % 3` → `1`     |
| `**`     | Power / exponentiation          | `2 ** 10` → `1024` |

Integer division truncates. If either operand is a Potion (float), the result is a Potion:

```rune
Chant(10 / 3);    // 3 (integer division)
Chant(10.0 / 3);  // 3.3333... (float division)
```

### String operations

The `+` operator concatenates any value with a string:

```rune
Chant("Level " + 5);              // "Level 5"
Chant("HP: " + 3.14);             // "HP: 3.14"
Chant("Alive: " + Truth);         // "Alive: Truth"
```

The `*` operator repeats a string:

```rune
Chant("ha" * 3);    // "hahaha"
Chant("-" * 20);     // "--------------------"
```

## Comparison

| Operator          | Description           | Example       |
| ----------------- | --------------------- | ------------- |
| `matches` or `==` | Equality              | `x matches 5` |
| `!=`              | Not equal             | `x != 0`      |
| `<`               | Less than             | `x < 10`      |
| `>`               | Greater than          | `x > 0`       |
| `<=`              | Less than or equal    | `x <= 100`    |
| `>=`              | Greater than or equal | `x >= 1`      |

RuneLang has **no implicit type coercion**. Comparing a Countstone to a Runestone is a type error, not a silent `false`.

The `matches` keyword is the idiomatic way to check equality. `==` is supported as an alias for developers coming from other languages.

## Logical

| Operator | Description | Example                      |
| -------- | ----------- | ---------------------------- |
| `and`    | Logical AND | `x > 0 and x < 100`          |
| `or`     | Logical OR  | `x matches 0 or x matches 1` |
| `not`    | Logical NOT | `not is_dead`                |

Logical operators short-circuit: `and` stops at the first falsy value, `or` stops at the first truthy value.

## Bitwise

| Operator | Description | Example                   |
| -------- | ----------- | ------------------------- |
| `&`      | Bitwise AND | `0b1100 & 0b1010` → `8`   |
| `\|`     | Bitwise OR  | `0b1100 \| 0b1010` → `14` |
| `^`      | Bitwise XOR | `0b1100 ^ 0b1010` → `6`   |
| `~`      | Bitwise NOT | `~0` → `-1`               |
| `<<`     | Left shift  | `1 << 4` → `16`           |
| `>>`     | Right shift | `16 >> 2` → `4`           |

Bitwise operators only work on Countstone (integer) values.

## Membership

The `in` operator tests whether a value exists in a collection:

```rune
Scroll heroes is ["Gandalf", "Frodo", "Aragorn"];
Chant("Frodo" in heroes);      // Truth
Chant("Sauron" in heroes);     // Falsehood

// works on strings
Chant("ello" in "hello");      // Truth

// works on tomes (checks keys)
Tome stats is {"str": 18, "dex": 14};
Chant("str" in stats);         // Truth
```

## Operator precedence

From lowest to highest precedence:

| Level | Operators              | Associativity |
| ----- | ---------------------- | ------------- |
| 1     | `or`                   | Left          |
| 2     | `and`                  | Left          |
| 3     | `\|`                   | Left          |
| 4     | `^`                    | Left          |
| 5     | `&`                    | Left          |
| 6     | `matches` `==` `!=`    | Left          |
| 7     | `<` `>` `<=` `>=` `in` | Left          |
| 8     | `<<` `>>`              | Left          |
| 9     | `+` `-`                | Left          |
| 10    | `*` `/` `%`            | Left          |
| 11    | `**`                   | Right         |
| 12    | `-` (unary) `not` `~`  | Right         |

Use parentheses to override precedence when needed:

```rune
Countstone result is (1 + 2) * 3;  // 9, not 7
```
