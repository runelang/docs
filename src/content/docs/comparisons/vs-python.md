---
title: RuneLang vs Python
description: How RuneLang compares to Python — what's similar, what's different, and where RuneLang wins.
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

RuneLang's **bytecode VM** is compiled to native code via Rust, delivering competitive performance with Python while beating Node.js on most benchmarks.

#### v0.1.0-pre Benchmarks

Tested on Windows 11 (64 runs per benchmark, median reported):

| Benchmark | RuneLang | Python 3.11 | Comparison |
|-----------|----------|-------------|------------|
| **Fibonacci** (recursive, n=30) | 132ms | 120ms | 1.1x slower |
| **Loop Sum** (1M iterations) | 85ms | 94ms | **1.1x faster** ⚡ |
| **String Concat** (10K appends) | 64ms | 56ms | 1.2x slower |
| **Array Ops** (50K map/filter/reduce) | 77ms | 68ms | 1.1x slower |
| **Math Heavy** (100K sqrt/sin/cos) | 75ms | 71ms | 1.1x slower |
| **Class Creation** (10K objects) | 70ms | 56ms | 1.3x slower |
| **Error Handling** (10K try/catch) | 63ms | 57ms | 1.1x slower |
| **Nested Loops** (500x500) | 74ms | 65ms | 1.1x slower |
| **Map Ops** (10K insert+lookup) | 67ms | 55ms | 1.2x slower |

**Key takeaways:**
- RuneLang is **competitive** with Python across the board (within 1.1-1.3x)
- Beats Python on **loop-heavy** workloads
- No GIL, no garbage collector pauses, predictable performance
- Compiled to native code for instant startup (no warmup)

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
