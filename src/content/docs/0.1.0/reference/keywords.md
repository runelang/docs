---
title: Keywords
description: Complete list of reserved keywords in RuneLang.
slug: 0.1.0/reference/keywords
---

## Type keywords

| Keyword | Purpose | Traditional equivalent |
|---|---|---|
| `Countstone` | Integer type | `int` |
| `Potion` | Float type | `float` |
| `Runestone` | String type | `str` / `string` |
| `Flagstone` | Boolean type | `bool` |
| `Scroll` | Array type | `list` / `array` |
| `Tome` | Map type | `dict` / `map` |
| `Coffer` | Byte type | `byte` |
| `Hex` | Hex data type | — |
| `Familiar` | Object reference type | `object` / `any` |
| `Void` | Absence of value | `None` / `null` / `void` |

## Declaration keywords

| Keyword | Purpose | Example |
|---|---|---|
| `Mutable` | Mark variable as mutable | `Mutable Countstone x is 5;` |
| `Enchanted` | Mark variable as immutable (explicit) | `Enchanted Countstone PI is 3.14;` |
| `is` | Assignment operator | `x is 42;` |
| `is written as` | Assignment (verbose form) | `x is written as x + 1;` |
| `of` | Used in type declarations | `Scroll of items` |

## Function keywords

| Keyword | Purpose | Example |
|---|---|---|
| `Ritual` | Function declaration | `Ritual greet() begins ... end of Ritual` |
| `begins` | Start of function body | `Ritual foo() begins` |
| `end of Ritual` | End of function body | `end of Ritual` |
| `returneth` | Return a value | `returneth x * 2;` |
| `Spell` | Lambda / inline function | `Spell double is (Countstone x) => x * 2;` |

## Control flow keywords

| Keyword | Purpose | Traditional equivalent |
|---|---|---|
| `Quest` | If / conditional | `if` |
| `begins when` | Condition guard | `if (condition)` |
| `elsewise when` | Else-if | `else if` / `elif` |
| `elsewise` | Else | `else` |
| `end of Quest` | End conditional | `}` / end |
| `Odyssey` | For loop | `for` |
| `from` | Range start | `range(start, ...)` |
| `to` | Range end (exclusive) | `range(..., end)` |
| `by` | Step size | `range(..., ..., step)` |
| `in` | Iteration / membership | `in` |
| `Vigil` | While loop | `while` |
| `whilst` | While condition | `while (condition)` |
| `Oracle` | Pattern matching | `switch` / `match` |
| `reveals` | Oracle subject | `switch (value)` |
| `fate` | Match arm | `case` |
| `Flee` | Break loop | `break` |
| `Persist` | Continue loop | `continue` |

## OOP keywords

| Keyword | Purpose | Traditional equivalent |
|---|---|---|
| `Guild` | Class declaration | `class` |
| `inherits` | Class inheritance | `extends` / `:` |
| `end of Guild` | End of class | `}` |
| `thy` | Self reference | `self` / `this` |
| `summon` | Create instance / import | `new` / `import` |
| `Realm` | Enum declaration | `enum` |
| `end of Realm` | End of enum | `}` |

## Error handling keywords

| Keyword | Purpose | Traditional equivalent |
|---|---|---|
| `Trap` | Try block | `try` |
| `Evade` | Catch block | `catch` / `except` |
| `end of Trap` | End error handling | `}` |
| `Forfeit` | Throw an error | `throw` / `raise` |

## Literal keywords

| Keyword | Purpose | Traditional equivalent |
|---|---|---|
| `Truth` | Boolean true | `true` / `True` |
| `Falsehood` | Boolean false | `false` / `False` |
| `Void` | Null / none | `null` / `None` |

## Logical keywords

| Keyword | Purpose | Traditional equivalent |
|---|---|---|
| `and` | Logical AND | `&&` / `and` |
| `or` | Logical OR | `\|\|` / `or` |
| `not` | Logical NOT | `!` / `not` |
| `matches` | Equality check | `==` |

## Other keywords

| Keyword | Purpose |
|---|---|
| `end` | Used in `end of X` constructs |
| `written` | Used in `is written as` |
| `as` | Used in `is written as` |
