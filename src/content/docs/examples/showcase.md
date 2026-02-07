---
title: Feature Showcase
description: A comprehensive example demonstrating every major RuneLang feature in one program.
---

This program exercises every major feature added in RuneLang — from number literals and bitwise ops to guild inheritance, higher-order methods, and error throwing.

```rune
// showcase.rune - all features

Chant("=== RUNELANG FEATURE SHOWCASE ===\n");

// immutable by default
Countstone x is 42;
Chant("immutable x: " + x);

// mutable override
Mutable Countstone score is 0;
score is written as 100;
Chant("mutable score: " + score);

// number literals: hex, binary, underscores
Countstone hex_val is 0xFF;
Countstone bin_val is 0b1010;
Countstone big_num is 1_000_000;
Chant("hex 0xFF = " + hex_val);
Chant("bin 0b1010 = " + bin_val);
Chant("1_000_000 = " + big_num);

// power operator
Countstone cubed is 3 ** 3;
Chant("\n3 ** 3 = " + cubed);

// bitwise operations
Countstone a is 0b1100;
Countstone b is 0b1010;
Chant("\n--- Bitwise ---");
Chant("1100 & 1010 = " + (a & b));
Chant("1100 | 1010 = " + (a | b));
Chant("1100 ^ 1010 = " + (a ^ b));
Chant("~0 = " + ~0);
Chant("1 << 4 = " + (1 << 4));
Chant("16 >> 2 = " + (16 >> 2));

// in operator
Scroll heroes is ["Gandalf", "Frodo", "Aragorn"];
Chant("\n--- Membership (in) ---");
Chant("Frodo in heroes: " + ("Frodo" in heroes));
Chant("Sauron in heroes: " + ("Sauron" in heroes));
Chant("'ello' in 'hello': " + ("ello" in "hello"));

// for-each
Chant("\n--- For-Each ---");
Odyssey for hero in heroes is
    Chant("  Hero: " + hero);
end of Odyssey

// odyssey with step
Chant("\n--- Odyssey with Step ---");
Odyssey for i from 0 to 20 by 5 is
    Chant("  i = " + i);
end of Odyssey

// slicing
Scroll nums is [10, 20, 30, 40, 50];
Chant("\n--- Slicing ---");
Chant("nums[1:3] = " + nums[1:3]);
Chant("nums[:2] = " + nums[:2]);
Chant("nums[3:] = " + nums[3:]);

Runestone word is "RuneLang";
Chant("word[0:4] = " + word[0:4]);

// higher-order array methods
Scroll numbers is [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Chant("\n--- Higher-Order Methods ---");

Scroll doubled is numbers.map((Countstone n) => n * 2);
Chant("map (*2): " + doubled);

Scroll evens is numbers.filter((Countstone n) => n % 2 == 0);
Chant("filter (even): " + evens);

Countstone total is numbers.reduce(0, (Countstone acc, Countstone n) => acc + n);
Chant("reduce (sum): " + total);

Countstone found is numbers.find((Countstone n) => n > 7);
Chant("find (>7): " + found);

Countstone idx is numbers.indexOf(5);
Chant("indexOf(5): " + idx);

Scroll reversed is numbers.reverse();
Chant("reverse: " + reversed);

Scroll sorted is [5, 3, 8, 1, 9, 2].sort();
Chant("sort: " + sorted);

Scroll nested is [[1, 2], [3, 4], [5]];
Scroll flat is nested.flat();
Chant("flat: " + flat);

Runestone joined is ["a", "b", "c"].join("-");
Chant("join: " + joined);

// string methods
Chant("\n--- String Methods ---");
Runestone msg is "  hello world  ";
Chant("trim: '" + msg.trim() + "'");
Chant("split: " + "a,b,c".split(","));
Chant("replace: " + "foo bar foo".replace("foo", "baz"));
Chant("chars: " + "abc".chars());
Chant("repeat: " + "ha" * 3);
Chant("indexOf: " + "hello".indexOf("llo"));

// map methods
Chant("\n--- Map Methods ---");
Tome config is {"host": "localhost", "port": 8080};
Chant("keys: " + config.keys());
Chant("values: " + config.values());
Chant("entries: " + config.entries());
Chant("has 'host': " + config.has("host"));

Tome extra is {"debug": Truth};
Tome merged is config.merge(extra);
Chant("merged: " + merged);

// guild inheritance
Chant("\n--- Guild Inheritance ---");
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
end of Guild

Familiar beast is summon Creature("Wolf", 50);
beast.speak();

Familiar drake is summon Dragon("Smaug", 500, 99);
drake.speak();
Chant("Dragon HP: " + drake.hp);

// realm (enum)
Chant("\n--- Realm (Enum) ---");
Realm Element is
    Fire;
    Water;
    Earth;
    Air;
end of Realm

Chant("Fire = " + Element["Fire"]);
Chant("Water = " + Element["Water"]);

// math builtins
Chant("\n--- Math ---");
Chant("Abs(-42) = " + Abs(-42));
Chant("Sqrt(144) = " + Sqrt(144));
Chant("Floor(3.7) = " + Floor(3.7));
Chant("Ceil(3.2) = " + Ceil(3.2));
Chant("Round(3.5) = " + Round(3.5));
Chant("Min(5, 3) = " + Min(5, 3));
Chant("Max(5, 3) = " + Max(5, 3));
Chant("PI = " + PI);

// range
Chant("\n--- Range ---");
Scroll r is Range(1, 6);
Chant("Range(1,6) = " + r);

// format
Runestone formatted is Format("{} has {} HP", "Thorin", 100);
Chant("Format: " + formatted);

// typeof
Chant("\n--- TypeOf ---");
Chant("TypeOf(42) = " + TypeOf(42));
Chant("TypeOf(3.14) = " + TypeOf(3.14));
Chant("TypeOf(\"hi\") = " + TypeOf("hi"));
Chant("TypeOf(Truth) = " + TypeOf(Truth));
Chant("TypeOf([1,2]) = " + TypeOf([1, 2]));

// transmute (type casting)
Chant("\n--- Transmute ---");
Chant("Transmute(42, \"Runestone\") = " + Transmute(42, "Runestone"));
Chant("Transmute(\"123\", \"Countstone\") = " + Transmute("123", "Countstone"));
Chant("Transmute(3.14, \"Countstone\") = " + Transmute(3.14, "Countstone"));

// forfeit (throw) + trap/evade
Chant("\n--- Forfeit (Throw) ---");
Ritual risky(Countstone val) begins
    Quest begins when (val < 0)
        Forfeit "value cannot be negative!";
    end of Quest
    returneth val * 2;
end of Ritual

Trap begins
    Countstone result is risky(-5);
Evade (err)
    Chant("Caught: " + err);
end of Trap

Countstone safe_result is risky(10);
Chant("risky(10) = " + safe_result);

// chronos (timestamp)
Potion now is Chronos();
Chant("\n--- Chronos ---");
Chant("Timestamp: " + now);

// assert
Chant("\n--- Assert ---");
Assert(1 + 1 == 2);
Chant("Assert passed: 1 + 1 == 2");

Chant("\n=== SHOWCASE COMPLETE ===");
```

### Features demonstrated

- Immutable by default variables
- Mutable keyword override
- Number literals: hex (`0xFF`), binary (`0b1010`), underscore separators (`1_000_000`)
- Power operator (`**`)
- Bitwise operators (`&`, `|`, `^`, `~`, `<<`, `>>`)
- Membership testing (`in`)
- For-each iteration
- Odyssey with step (`by`)
- Array and string slicing (`[start:end]`)
- Higher-order methods (`map`, `filter`, `reduce`, `find`, `sort`, `reverse`, `flat`, `join`, `indexOf`)
- String methods (`trim`, `split`, `replace`, `chars`, `repeat`, `indexOf`)
- String repeat with `*`
- Map methods (`keys`, `values`, `entries`, `has`, `merge`)
- Guild inheritance (`inherits`)
- Realms (enums)
- Math builtins (`Abs`, `Sqrt`, `Floor`, `Ceil`, `Round`, `Min`, `Max`, `PI`)
- Range function
- Format strings
- TypeOf introspection
- Transmute (type casting)
- Forfeit (error throwing)
- Trap/Evade (error handling)
- Chronos (timestamps)
- Assert
