---
title: RuneLang vs Python
description: How RuneLang compares to Python — what's similar, what's different,
  and where RuneLang wins.
slug: 0.1.0/comparisons/vs-python
---

RuneLang and Python share a philosophy of readability, but take different approaches to safety, performance, and syntax.

## At a glance

| Feature              | RuneLang                 | Python              |
| -------------------- | ------------------------ | ------------------- |
| Runtime              | Native binary (Rust)     | CPython interpreter |
| Dependencies         | Zero                     | 300+ stdlib modules |
| Immutable by default | Yes                      | No                  |
| Block syntax         | `is ... end of X`        | Indentation         |
| Type annotations     | Required on declarations | Optional hints      |
| Semicolons           | Required                 | None                |
| Null value           | `Void` (explicit)        | `None`              |
| Boolean values       | `Truth` / `Falsehood`    | `True` / `False`    |

## Side-by-side comparison

### Variables

**Python:**

```python
name = "Gandalf"          # mutable by default
MAX_HP = 100              # convention, not enforced
health: int = 100         # type hint, not enforced
```

**RuneLang:**

```rune
Runestone name is "Gandalf";       // immutable by default
Countstone MAX_HP is 100;          // actually immutable
Mutable Countstone health is 100;  // explicit opt-in to mutability
```

### Functions

**Python:**

```python
def greet(name: str) -> str:
    return f"Hello, {name}!"

double = lambda x: x * 2
```

**RuneLang:**

```rune
Ritual greet(Runestone name) -> Runestone begins
    returneth "Hello, " + name + "!";
end of Ritual

Spell double is (Countstone x) => x * 2;
```

### Classes

**Python:**

```python
class Hero:
    def __init__(self, name: str, hp: int):
        self.name = name
        self.hp = hp

    def speak(self):
        print(f"{self.name} speaks!")

player = Hero("Thorin", 100)
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

Familiar player is summon Hero("Thorin", 100);
```

### Control flow

**Python:**

```python
if health > 50:
    print("Strong")
elif health > 0:
    print("Wounded")
else:
    print("Dead")

for i in range(5):
    print(i)

for hero in party:
    print(hero)
```

**RuneLang:**

```rune
Quest begins when (health > 50)
    Chant("Strong");
elsewise when (health > 0)
    Chant("Wounded");
elsewise
    Chant("Dead");
end of Quest

Odyssey for i from 0 to 5 is
    Chant(i);
end of Odyssey

Odyssey for hero in party is
    Chant(hero);
end of Odyssey
```

### Error handling

**Python:**

```python
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")

raise ValueError("bad input")
```

**RuneLang:**

```rune
Trap begins
    Countstone result is 10 / 0;
Evade (err)
    Chant("Error: " + err);
end of Trap

Forfeit "bad input";
```

### Pattern matching

**Python (3.10+):**

```python
match command:
    case "attack":
        print("Attacking!")
    case "defend":
        print("Defending!")
    case _:
        print("Unknown command")
```

**RuneLang:**

```rune
Oracle reveals (command)
    fate "attack": Chant("Attacking!");
    fate "defend": Chant("Defending!");
    elsewise: Chant("Unknown command");
end of Oracle
```

## Where RuneLang wins

### Performance

RuneLang's **bytecode VM** is compiled to native code via Rust, delivering competitive performance with Python across 17 benchmarks.

#### v0.1.1-pre Benchmarks

Tested on Windows 11, Python 3.13 (9 runs per benchmark, median reported):

| Benchmark                             | RuneLang | Python 3.13 | Comparison      |
| ------------------------------------- | -------- | ----------- | --------------- |
| **Fibonacci** (recursive, n=30)       | 114ms    | 121ms       | **1.1x faster** |
| **Loop Sum** (1M iterations)          | 82ms     | 97ms        | **1.2x faster** |
| **String Concat** (10K appends)       | 69ms     | 55ms        | 1.2x slower     |
| **Array Ops** (50K map/filter/reduce) | 74ms     | 63ms        | 1.2x slower     |
| **Math Heavy** (100K sqrt/sin/cos)    | 74ms     | 70ms        | 1.1x slower     |
| **Class Creation** (10K objects)      | 68ms     | 56ms        | 1.2x slower     |
| **Error Handling** (10K try/catch)    | 63ms     | 53ms        | 1.2x slower     |
| **Nested Loops** (500x500)            | 71ms     | 66ms        | 1.1x slower     |
| **Map/Dict Ops** (10K insert+lookup)  | 69ms     | 57ms        | 1.2x slower     |
| **Closures** (100K create+call)       | 75ms     | 71ms        | 1.1x slower     |
| **While Loop** (1M countdown)         | 90ms     | 116ms       | **1.3x faster** |
| **Method Calls** (100K dispatches)    | 77ms     | 56ms        | 1.4x slower     |
| **Prime Sieve** (50K candidates)      | 84ms     | 72ms        | 1.2x slower     |
| **Binary Trees** (depth 15)           | 88ms     | 71ms        | 1.2x slower     |
| **Collatz** (100K sequences)          | 544ms    | 540ms       | 1.0x slower     |
| **Ackermann** (3, 9)                  | 347ms    | 777ms       | **2.2x faster** |
| **Inheritance** (10K objects)         | 69ms     | 56ms        | 1.2x slower     |

**Key takeaways:**

* RuneLang **beats Python** on fibonacci, loop sum, while loops, and ackermann
* **2.2x faster** on deep recursion (ackermann) thanks to optimized call frames
* Competitive across the board (within 1.1-1.4x on most benchmarks)
* No GIL, no garbage collector pauses, predictable performance
* Compiled to native code for instant startup (no warmup)

### Safety

Python variables are mutable by default and type hints are completely optional and unenforced. RuneLang makes immutability the default and requires type annotations, catching entire categories of bugs at declaration time.

### Deployment

RuneLang compiles to a single binary with zero dependencies. No virtual environments, no pip, no version conflicts. Copy the binary and go.

### Fun

Python's syntax is clean but corporate. RuneLang's syntax tells a story. `Ritual`, `Guild`, `Odyssey`, `Oracle` — every keyword is memorable and fun to type.

## Where Python wins

### Ecosystem

Python has hundreds of thousands of packages. RuneLang is a new language with no package ecosystem yet.

### Maturity

Python has 30+ years of battle-testing, edge-case handling, and optimization. RuneLang is young and still evolving.

### Industry adoption

Python is used everywhere — data science, web, AI, DevOps. RuneLang is for developers who want something different.
