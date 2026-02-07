---
title: Built-in Functions
description: All built-in functions available in RuneLang.
---

## I/O

### Chant

Prints a value to stdout with a newline.

```rune
Chant("Hello, world!");
Chant(42);
Chant([1, 2, 3]);
```

### Whisper

Prints a value to stdout **without** a trailing newline.

```rune
Whisper("Enter name: ");
```

### Inscribe

Reads a line of input from stdin.

```rune
Whisper("What is your name? ");
Runestone name is Inscribe();
Chant("Hello, " + name + "!");
```

## File I/O

### ReadScroll

Reads the entire contents of a file as a string.

```rune
Runestone contents is ReadScroll("data.txt");
Chant(contents);
```

### WriteScroll

Writes a string to a file, overwriting any existing content.

```rune
WriteScroll("output.txt", "Hello from RuneLang!");
```

### AppendScroll

Appends a string to a file without overwriting.

```rune
AppendScroll("log.txt", "New entry\n");
```

### ScrollExists

Returns `Truth` if a file exists, `Falsehood` otherwise.

```rune
Quest begins when (ScrollExists("config.rune"))
    Chant("Config found.");
elsewise
    Chant("No config file.");
end of Quest
```

## Math

### Abs

Returns the absolute value.

```rune
Chant(Abs(-42));    // 42
Chant(Abs(42));     // 42
Chant(Abs(-3.14));  // 3.14
```

### Pow

Raises a number to a power. Equivalent to the `**` operator.

```rune
Chant(Pow(2, 10));  // 1024
```

### Sqrt

Returns the square root as a Potion (float).

```rune
Chant(Sqrt(144));  // 12
Chant(Sqrt(2));    // 1.4142135623730951
```

### Min / Max

Returns the smaller or larger of two numbers.

```rune
Chant(Min(5, 3));   // 3
Chant(Max(5, 3));   // 5
```

### Floor / Ceil / Round

```rune
Chant(Floor(3.7));   // 3
Chant(Ceil(3.2));    // 4
Chant(Round(3.5));   // 4
Chant(Round(3.4));   // 3
```

### Trigonometry

```rune
Chant(Sin(PI / 2));   // 1.0
Chant(Cos(0));        // 1.0
Chant(Tan(PI / 4));   // ~1.0
```

### Log

Natural logarithm (base e).

```rune
Chant(Log(EULER));  // 1.0
```

### Constants

| Constant | Value | Description |
|---|---|---|
| `PI` | `3.141592653589793` | Pi |
| `TAU` | `6.283185307179586` | Tau (2 * Pi) |
| `EULER` | `2.718281828459045` | Euler's number (e) |
| `INFINITY` | `inf` | Positive infinity |

## Utility

### Measure

Returns the length of a string, array, or map.

```rune
Chant(Measure("hello"));    // 5
Chant(Measure([1, 2, 3]));  // 3
```

### TypeOf

Returns the type name as a string.

```rune
Chant(TypeOf(42));        // "Countstone"
Chant(TypeOf("hello"));   // "Runestone"
Chant(TypeOf(3.14));      // "Potion"
Chant(TypeOf(Truth));     // "Flagstone"
Chant(TypeOf([1, 2]));    // "Scroll"
Chant(TypeOf({}));        // "Tome"
```

### Transmute

Converts a value to a different type.

```rune
Transmute(42, "Runestone")     // "42"
Transmute("123", "Countstone") // 123
Transmute(3.14, "Countstone")  // 3
Transmute(42, "Potion")        // 42.0
Transmute(1, "Flagstone")      // Truth
```

### Format

String formatting with `{}` placeholders.

```rune
Runestone msg is Format("{} has {} HP", "Thorin", 100);
Chant(msg);  // "Thorin has 100 HP"
```

### Range

Creates an array of integers in a range.

```rune
Scroll r is Range(1, 6);     // [1, 2, 3, 4, 5]
Scroll r2 is Range(0, 10);   // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Roll

Generates a random integer between min and max (inclusive). Useful for D&D-style dice rolls.

```rune
Countstone d20 is Roll(1, 20);
Chant("You rolled a " + d20 + "!");
```

### Assert

Throws an error if the condition is `Falsehood`.

```rune
Assert(1 + 1 == 2);        // passes
Assert(Falsehood);           // ERROR: assertion failed
```

### Halt

Immediately terminates the program.

```rune
Halt();
```

### Chronos

Returns the current Unix timestamp in milliseconds.

```rune
Potion now is Chronos();
Chant("Timestamp: " + now);
```

### Slumber

Pauses execution for the specified number of milliseconds.

```rune
Chant("Casting spell...");
Slumber(2000);  // wait 2 seconds
Chant("Spell complete!");
```
