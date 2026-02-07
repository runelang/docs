---
title: Guilds & Realms
description: Object-oriented programming with Guilds (classes), inheritance, and Realms (enums).
---

## Guilds (classes)

A `Guild` is RuneLang's class. It defines fields, a constructor, and methods.

```rune
Guild Hero is
    Runestone name;
    Mutable Countstone health;
    Countstone attack;

    Ritual new(Runestone n, Countstone hp, Countstone atk) begins
        thy.name is n;
        thy.health is hp;
        thy.attack is atk;
    end of Ritual

    Ritual status() begins
        Chant(thy.name + " | HP: " + thy.health + " | ATK: " + thy.attack);
    end of Ritual
end of Guild
```

### Creating instances

Use `summon` to create a Guild instance:

```rune
Familiar player is summon Hero("Thorin", 100, 30);
player.status();  // Thorin | HP: 100 | ATK: 30
```

### The `thy` keyword

Inside a Guild method, `thy` refers to the current instance (like `self` or `this`):

```rune
Ritual take_damage(Countstone amount) begins
    thy.health is written as thy.health - amount;
    Chant(thy.name + " takes " + amount + " damage!");
end of Ritual
```

### Field mutability

Fields follow the same immutability rules as variables. Prefix with `Mutable` to allow reassignment:

```rune
Guild Counter is
    Mutable Countstone count;  // can be changed

    Ritual new() begins
        thy.count is 0;
    end of Ritual

    Ritual increment() begins
        thy.count is written as thy.count + 1;
    end of Ritual
end of Guild
```

### Methods with return values

```rune
Guild Circle is
    Potion radius;

    Ritual new(Potion r) begins
        thy.radius is r;
    end of Ritual

    Ritual area() -> Potion begins
        returneth PI * thy.radius ** 2;
    end of Ritual

    Ritual circumference() -> Potion begins
        returneth 2.0 * PI * thy.radius;
    end of Ritual
end of Guild

Familiar c is summon Circle(5.0);
Chant("Area: " + c.area());
Chant("Circumference: " + c.circumference());
```

## Inheritance

Guilds can inherit from other Guilds using `inherits`:

```rune
Guild Creature is
    Runestone name;
    Mutable Countstone hp;

    Ritual new(Runestone n, Countstone h) begins
        thy.name is n;
        thy.hp is h;
    end of Ritual

    Ritual speak() begins
        Chant(thy.name + " growls.");
    end of Ritual
end of Guild

Guild Dragon inherits Creature is
    Countstone fire_power;

    Ritual new(Runestone n, Countstone h, Countstone fp) begins
        thy.name is n;
        thy.hp is h;
        thy.fire_power is fp;
    end of Ritual

    Ritual speak() begins
        Chant(thy.name + " breathes fire with power " + thy.fire_power + "!");
    end of Ritual

    Ritual fly() begins
        Chant(thy.name + " takes to the sky!");
    end of Ritual
end of Guild
```

The child Guild:

- Inherits all fields and methods from the parent
- Can add new fields and methods
- Can override parent methods (like `speak` above)
- Must define its own `new` constructor

```rune
Familiar smaug is summon Dragon("Smaug", 500, 99);
smaug.speak();  // Smaug breathes fire with power 99!
smaug.fly();    // Smaug takes to the sky!
```

## Realms (enums)

A `Realm` defines a set of named constants, similar to enums in other languages.

```rune
Realm Direction is
    North;
    South;
    East;
    West;
end of Realm
```

Realm values are stored as a Tome (map) with string keys and integer values:

```rune
Chant(Direction["North"]);  // 0
Chant(Direction["South"]);  // 1
Chant(Direction["East"]);   // 2
Chant(Direction["West"]);   // 3
```

### Using Realms with Oracle

Realms pair naturally with the Oracle (pattern matching):

```rune
Realm Element is
    Fire;
    Water;
    Earth;
    Air;
end of Realm

Countstone chosen is Element["Fire"];

Oracle reveals (chosen)
    fate 0: Chant("Fire burns bright!");
    fate 1: Chant("Water flows eternal.");
    fate 2: Chant("Earth stands firm.");
    fate 3: Chant("Air whispers secrets.");
end of Oracle
```

## Passing objects around

Use the `Familiar` type annotation when functions accept Guild instances:

```rune
Ritual heal(Familiar target, Countstone amount) begins
    target.health is written as target.health + amount;
    Chant(target.name + " healed for " + amount + "!");
end of Ritual

Ritual battle(Familiar hero, Familiar monster) begins
    hero.strike(monster);
    monster.strike(hero);
end of Ritual
```

Guild instances are passed by reference — modifications to fields inside a function affect the original object.
