---
title: Error Handling
description: Catching and throwing errors with Trap, Evade, and Forfeit.
slug: 0.1.0/guide/error-handling
---

## Trap / Evade (try / catch)

The `Trap`/`Evade` block catches runtime errors and prevents them from crashing your program.

```rune
Trap begins
    Countstone result is 10 / 0;
    Chant("This line never runs.");
Evade (err)
    Chant("Caught: " + err);
end of Trap
```

Output:

```
Caught: division by zero - the void consumes all
```

The error variable (`err` in the example above) contains the error message as a Runestone (string). You can name it whatever you want.

### What gets caught

Trap/Evade catches all runtime errors, including:

* Division by zero
* Index out of bounds
* Type mismatches
* Undefined variable access
* Explicitly thrown errors (via `Forfeit`)

### Execution flow

When an error occurs inside `Trap`:

1. Execution immediately jumps to the `Evade` block
2. The error message is bound to the named variable
3. After the `Evade` block, execution continues normally

```rune
Chant("Before trap");

Trap begins
    Chant("Inside trap - before error");
    Countstone bad is 10 / 0;
    Chant("Inside trap - after error (never reached)");
Evade (err)
    Chant("Caught: " + err);
end of Trap

Chant("After trap - program continues");
```

Output:

```
Before trap
Inside trap - before error
Caught: division by zero - the void consumes all
After trap - program continues
```

## Forfeit (throw)

Use `Forfeit` to throw a custom error:

```rune
Ritual withdraw(Mutable Countstone balance, Countstone amount) begins
    Quest begins when (amount > balance)
        Forfeit "insufficient gold! Need " + amount + " but only have " + balance;
    end of Quest
    balance is written as balance - amount;
    returneth balance;
end of Ritual
```

`Forfeit` takes any expression that evaluates to a value. That value becomes the error message.

### Catching custom errors

Custom errors thrown with `Forfeit` are caught by `Trap`/`Evade` just like built-in errors:

```rune
Trap begins
    Mutable Countstone gold is 50;
    withdraw(gold, 100);
Evade (err)
    Chant("Transaction failed: " + err);
end of Trap
```

Output:

```
Transaction failed: insufficient gold! Need 100 but only have 50
```

## Assert

The `Assert` built-in function throws an error if a condition is false:

```rune
Assert(1 + 1 == 2);              // passes silently
Assert(player.health > 0);       // passes if player is alive
Assert(Falsehood);                // ERROR: assertion failed
```

Use `Assert` for debugging and validating assumptions during development.

## Patterns

### Guard clauses

Use `Forfeit` at the top of a Ritual to validate inputs early:

```rune
Ritual set_level(Mutable Familiar player, Countstone level) begins
    Quest begins when (level < 1)
        Forfeit "level must be at least 1";
    end of Quest
    Quest begins when (level > 100)
        Forfeit "level cannot exceed 100";
    end of Quest
    player.level is written as level;
end of Ritual
```

### Wrapping risky operations

```rune
Ritual safe_divide(Countstone a, Countstone b) begins
    Trap begins
        returneth a / b;
    Evade (err)
        Chant("Warning: " + err);
        returneth 0;
    end of Trap
end of Ritual
```

## Error messages

RuneLang's built-in errors are themed to match the fantasy setting:

| Error | Message style |
|---|---|
| Division by zero | `division by zero - the void consumes all` |
| Undefined variable | `unknown rune 'x' - it has not been inscribed` |
| Type mismatch | `Hex Mismatch (Type): ...` |
| Immutable reassignment | `cannot reassign enchanted (immutable) rune 'x'` |
| Index out of bounds | `scroll index out of bounds` |
