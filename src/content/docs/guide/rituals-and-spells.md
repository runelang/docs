---
title: Rituals & Spells
description: Functions, lambdas, closures, and higher-order programming in RuneLang.
---

## Rituals (functions)

A `Ritual` is RuneLang's function. It takes typed parameters and has a body.

```rune
Ritual greet(Runestone name) begins
    Chant("Hello, " + name + "!");
end of Ritual

greet("Gandalf");
```

### Parameters

Parameters require type annotations:

```rune
Ritual add(Countstone a, Countstone b) begins
    returneth a + b;
end of Ritual

Countstone sum is add(3, 5);
Chant(sum);  // 8
```

### Return values

Use `returneth` to return a value:

```rune
Ritual square(Countstone x) begins
    returneth x * x;
end of Ritual
```

You can optionally annotate the return type with `->`:

```rune
Ritual is_positive(Countstone n) -> Flagstone begins
    returneth n > 0;
end of Ritual
```

Functions without a `returneth` implicitly return `Void`.

### Early return

`returneth` exits the function immediately:

```rune
Ritual find_hero(Scroll party, Runestone name) begins
    Odyssey for hero in party is
        Quest begins when (hero matches name)
            returneth Truth;
        end of Quest
    end of Odyssey
    returneth Falsehood;
end of Ritual
```

## Spells (lambdas)

A `Spell` is a named lambda expression — a single-expression function:

```rune
Spell double is (Countstone x) => x * 2;
Spell add is (Countstone a, Countstone b) => a + b;

Chant(double(21));   // 42
Chant(add(3, 5));    // 8
```

### Inline lambdas

Lambdas can be used directly as arguments without the `Spell` keyword:

```rune
Scroll numbers is [1, 2, 3, 4, 5];

Scroll doubled is numbers.map((Countstone n) => n * 2);
Chant(doubled);  // [2, 4, 6, 8, 10]

Scroll evens is numbers.filter((Countstone n) => n % 2 == 0);
Chant(evens);  // [2, 4]
```

### Multi-parameter lambdas

```rune
Countstone total is numbers.reduce(0, (Countstone acc, Countstone n) => acc + n);
Chant(total);  // 15
```

## Higher-order functions

Rituals and Spells are first-class values. They can be passed as arguments, returned from functions, and stored in variables.

```rune
Ritual apply_twice(Familiar func, Countstone value) begins
    returneth func(func(value));
end of Ritual

Spell increment is (Countstone x) => x + 1;
Chant(apply_twice(increment, 5));  // 7
```

### Closures

Functions capture their surrounding scope:

```rune
Ritual make_counter() begins
    Mutable Countstone count is 0;
    Ritual next() begins
        count is written as count + 1;
        returneth count;
    end of Ritual
    returneth next;
end of Ritual

Familiar counter is make_counter();
Chant(counter());  // 1
Chant(counter());  // 2
Chant(counter());  // 3
```

## Recursion

Rituals can call themselves:

```rune
Ritual factorial(Countstone n) begins
    Quest begins when (n <= 1)
        returneth 1;
    end of Quest
    returneth n * factorial(n - 1);
end of Ritual

Chant(factorial(10));  // 3628800
```

## Collection methods

RuneLang includes higher-order methods on Scrolls (arrays). See the [Methods reference](/reference/methods/) for the full list.

```rune
Scroll heroes is ["Gandalf", "Frodo", "Aragorn", "Legolas"];

// map — transform each element
Scroll shouts is heroes.map((Runestone h) => h.upper());

// filter — keep matching elements
Scroll long_names is heroes.filter((Runestone h) => h.length() > 5);

// reduce — accumulate a result
Countstone total_letters is heroes.reduce(0,
    (Countstone acc, Runestone h) => acc + h.length()
);

// find — first match
Runestone found is heroes.find((Runestone h) => h.contains("ro"));

// forEach — side effects
heroes.forEach((Runestone h) => Chant("Hero: " + h));
```
