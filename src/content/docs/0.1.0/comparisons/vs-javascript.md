---
title: RuneLang vs JavaScript
description: How RuneLang compares to JavaScript — what's similar, what's
  different, and why RuneLang is safer.
slug: 0.1.0/comparisons/vs-javascript
---

RuneLang and JavaScript are both dynamically-typed and expressive, but RuneLang fixes many of JavaScript's most notorious footguns.

## At a glance

| Feature              | RuneLang                    | JavaScript                      |
| -------------------- | --------------------------- | ------------------------------- |
| Type coercion        | None                        | Implicit everywhere             |
| Null values          | `Void` only                 | `null`, `undefined`, `NaN`      |
| Immutable by default | Yes                         | `const` (shallow only)          |
| Equality             | `matches` / `==` (strict)   | `===` (strict), `==` (coercing) |
| Runtime              | Native binary (Rust)        | V8 / browser engine             |
| Dependencies         | Zero                        | npm ecosystem                   |
| Semicolons           | Required                    | Optional (ASI)                  |
| `this`               | `thy` (always the instance) | Context-dependent               |

## The JavaScript problems RuneLang solves

### No type coercion insanity

**JavaScript:**

```javascript
"5" + 3        // "53"
"5" - 3        // 2
[] + []        // ""
[] + {}        // "[object Object]"
{} + []        // 0
true + true    // 2
"" == false    // true
null == undefined  // true
```

**RuneLang:**

```rune
"5" + 3        // "53" (explicit: string + anything = string)
"5" - 3        // ERROR: type mismatch
```

In RuneLang, the only implicit conversion is `string + value` → string concatenation. Everything else requires explicit `Transmute`.

### No `undefined`

JavaScript has three "empty" values: `null`, `undefined`, and `NaN`. RuneLang has one: `Void`.

```rune
// JavaScript
let x;           // undefined
let y = null;    // null
let z = 0 / 0;   // NaN
typeof null       // "object" (lol)

// RuneLang
Void x is Void;  // the only empty value
// accessing undefined variables is a compile error, not a runtime surprise
```

### `thy` always means the instance

JavaScript's `this` is notoriously confusing — it changes based on how a function is called:

```javascript
class Hero {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(this.name);
  }
}

const hero = new Hero("Thorin");
const fn = hero.greet;
fn(); // undefined (lost `this`)
```

RuneLang's `thy` is lexically bound to the Guild instance. It always refers to the current object:

```rune
Guild Hero is
    Runestone name;
    Ritual new(Runestone n) begins
        thy.name is n;
    end of Ritual
    Ritual greet() begins
        Chant(thy.name);  // always works
    end of Ritual
end of Guild
```

### No semicolon ambiguity

JavaScript's Automatic Semicolon Insertion (ASI) creates subtle bugs:

```javascript
return;
{
  value: 42;
}
// returns undefined, not the object
```

RuneLang requires semicolons. No ambiguity, no surprises.

## Side-by-side comparison

### Variables

**JavaScript:**

```javascript
let health = 100; // mutable
const MAX_HP = 100; // immutable (shallow)
const items = [1, 2, 3];
items.push(4); // works despite const!
var old = "don't use"; // function-scoped (legacy)
```

**RuneLang:**

```rune
Mutable Countstone health is 100;  // explicit mutable
Countstone MAX_HP is 100;          // immutable by default
Scroll items is [1, 2, 3];
items.push(4);                     // collection methods still work
```

### Functions

**JavaScript:**

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

const double = (x) => x * 2;
const add = (a, b) => a + b;
```

**RuneLang:**

```rune
Ritual greet(Runestone name) begins
    returneth "Hello, " + name + "!";
end of Ritual

Spell double is (Countstone x) => x * 2;
Spell add is (Countstone a, Countstone b) => a + b;
```

### Classes

**JavaScript:**

```javascript
class Hero {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
  speak() {
    console.log(`${this.name} speaks!`);
  }
}

class Dragon extends Hero {
  constructor(name, hp, firePower) {
    super(name, hp);
    this.firePower = firePower;
  }
}
```

**RuneLang:**

```rune
Guild Hero is
    Runestone name;
    Countstone hp;

    Ritual new(Runestone n, Countstone h) begins
        thy.name is n;
        thy.hp is h;
    end of Ritual

    Ritual speak() begins
        Chant(thy.name + " speaks!");
    end of Ritual
end of Guild

Guild Dragon inherits Hero is
    Countstone fire_power;

    Ritual new(Runestone n, Countstone h, Countstone fp) begins
        thy.name is n;
        thy.hp is h;
        thy.fire_power is fp;
    end of Ritual
end of Guild
```

### Array methods

**JavaScript:**

```javascript
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map((n) => n * 2);
const evens = nums.filter((n) => n % 2 === 0);
const sum = nums.reduce((acc, n) => acc + n, 0);
```

**RuneLang:**

```rune
Scroll nums is [1, 2, 3, 4, 5];
Scroll doubled is nums.map((Countstone n) => n * 2);
Scroll evens is nums.filter((Countstone n) => n % 2 == 0);
Countstone sum is nums.reduce(0, (Countstone acc, Countstone n) => acc + n);
```

Nearly identical. RuneLang's lambda params require type annotations, and `reduce` takes the initial value as the first argument.

### Error handling

**JavaScript:**

```javascript
try {
  throw new Error("something broke");
} catch (err) {
  console.log(err.message);
}
```

**RuneLang:**

```rune
Trap begins
    Forfeit "something broke";
Evade (err)
    Chant(err);
end of Trap
```

## Where RuneLang wins

* **No type coercion bugs.** `"5" - 3` is an error, not `2`.
* **No `undefined`.** Variables must be initialized.
* **No `this` confusion.** `thy` is always the instance.
* **Immutable by default.** Safer than `const` which only prevents reassignment.
* **Better performance.** Beats Node.js on 9 out of 17 benchmarks.
* **Zero dependencies.** Single binary, no `node_modules`.

### Performance

RuneLang's bytecode VM delivers competitive execution with Node.js, winning on over half the benchmarks:

#### v0.1.1-pre Benchmarks

Tested on Windows 11, Node.js v23.5 (9 runs per benchmark, median reported):

| Benchmark                             | RuneLang | Node.js | Comparison      |
| ------------------------------------- | -------- | ------- | --------------- |
| **Fibonacci** (recursive, n=30)       | 114ms    | 82ms    | 1.4x slower     |
| **Loop Sum** (1M iterations)          | 82ms     | 79ms    | 1.0x slower     |
| **String Concat** (10K appends)       | 69ms     | 81ms    | **1.2x faster** |
| **Array Ops** (50K map/filter/reduce) | 74ms     | 76ms    | **1.0x faster** |
| **Math Heavy** (100K sqrt/sin/cos)    | 74ms     | 85ms    | **1.2x faster** |
| **Class Creation** (10K objects)      | 68ms     | 78ms    | **1.1x faster** |
| **Error Handling** (10K try/catch)    | 63ms     | 93ms    | **1.5x faster** |
| **Nested Loops** (500x500)            | 71ms     | 84ms    | **1.2x faster** |
| **Map/Dict Ops** (10K insert+lookup)  | 69ms     | 78ms    | **1.1x faster** |
| **Closures** (100K create+call)       | 75ms     | 74ms    | 1.0x slower     |
| **While Loop** (1M countdown)         | 90ms     | 78ms    | 1.2x slower     |
| **Method Calls** (100K dispatches)    | 77ms     | 86ms    | **1.1x faster** |
| **Prime Sieve** (50K candidates)      | 84ms     | 79ms    | 1.1x slower     |
| **Binary Trees** (depth 15)           | 88ms     | 84ms    | 1.0x slower     |
| **Collatz** (100K sequences)          | 544ms    | 93ms    | 5.8x slower     |
| **Ackermann** (3, 9)                  | 347ms    | 107ms   | 3.2x slower     |
| **Inheritance** (10K objects)         | 69ms     | 75ms    | **1.1x faster** |

**Wins: 9/17 benchmarks**

RuneLang beats Node.js on strings, collections, math, classes, error handling, nested loops, maps, method calls, and inheritance. Node.js leads on highly recursive and deeply iterative workloads (fibonacci, ackermann, collatz) where V8's JIT compiler has an advantage.

**Key advantages:**

* Instant startup (no JIT warmup)
* Predictable performance (no hidden optimization tiers)
* Lower memory usage (no garbage collector overhead)
* Single native binary (no Node.js runtime required)

## Where JavaScript wins

* **Browser native.** JS runs in every browser. RuneLang doesn't.
* **Massive ecosystem.** npm has millions of packages.
* **Async/await.** RuneLang doesn't have concurrency primitives yet.
* **Industry standard.** JS is everywhere. RuneLang is new.
