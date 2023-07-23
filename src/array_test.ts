import { assertEquals } from "https://deno.land/std@0.195.0/assert/assert_equals.ts";
import { assert } from "https://deno.land/std@0.195.0/assert/assert.ts";
import { assertFalse } from "https://deno.land/std@0.195.0/assert/assert_false.ts";

import "./array.ts";

Deno.test("sequenceEqual1", () => {
  const v1 = ["a1", "b2", "c3"];
  const v2 = ["a1", "b3", "c3"];
  assertFalse(v1.sequenceEqual(v2));
});

Deno.test("sequenceEqual2", () => {
  const v1 = ["a1", "b2", "c3"];
  const v2 = ["a1", "b2", "c3"];
  assert(v1.sequenceEqual(v2));
});


Deno.test("sum", () => { 
  const v1 = [1, 2, 5];
  assertEquals(v1.sum(), 8);
});

Deno.test("comsum", () => { 
  const v1 = [1, 2, 5];
  assertEquals(v1.comsum(), [1, 3, 8]);
});

Deno.test("last1", () => { 
  const v1 = [1, 2, 5];
  assertEquals(v1.last(), 5);
});

Deno.test("last2", () => { 
  const v1: unknown[] = [];
  assertEquals(v1.last(), undefined);
});

Deno.test("last3", () => { 
  const v1 = [1, 2, 5];
  assertEquals(v1.last(v => v === 2), 2);
});

Deno.test("count", () => { 
  const v1 = [1, 2, 5];
  assertEquals(v1.count(), 3);
});

Deno.test("count1", () => { 
  const v1 = [1, 2, 5, 1];
  assertEquals(v1.count(v => v === 1), 2);
});

Deno.test("range start", () => { 
  const v1 = Array.range(5);
  assertEquals(v1, [0, 1, 2, 3, 4]);
});

Deno.test("range start end", () => { 
  const v1 = Array.range(2, 6);
  assertEquals(v1, [2, 3, 4, 5]);
});

Deno.test("range start end step", () => { 
  const v1 = Array.range(2, 6, 2);
  assertEquals(v1, [2, 4]);
});

Deno.test("linspace", () => {
  const v1 = Array.linspace(0, 4, 8);
  assertEquals(v1, [
    0., 0.5714285714285714, 1.1428571428571428, 1.7142857142857142, 2.2857142857142856, 2.8571428571428568,
    3.4285714285714284, 4.
  ]);
});


Deno.test("array add", () => { 
  const a = [1, 2, 3];
  const b = [2, 4, 8];
  assertEquals(a.add(b), [3, 6, 11]);
});

Deno.test("array add1", () => { 
  const a = [1, 2, 3];
  const b = 6;
  assertEquals(a.add(b), [7, 8, 9]);
});

Deno.test("array sub", () => { 
  const a = [1, 2, 3];
  const b = [2, 4, 8];
  assertEquals(a.sub(b), [-1, -2, -5]);
});

Deno.test("array sub1", () => { 
  const a = [1, 2, 3];
  const b = 6;
  assertEquals(a.sub(b), [-5, -4, -3]);
});

Deno.test("array mul", () => { 
  const a = [1, 2, 3];
  const b = [2, 4, 8];
  assertEquals(a.mul(b), [2, 8, 24]);
});

Deno.test("array mul1", () => { 
  const a = [1, 2, 3];
  const b = 6;
  assertEquals(a.mul(b), [6, 12, 18]);
});

Deno.test("array div", () => { 
  const a = [12, 2, 24];
  const b = [2, 2, 8];
  assertEquals(a.div(b), [6, 1, 3]);
});

Deno.test("array div1", () => { 
  const a = [1, 2, 3];
  const b = 2;
  assertEquals(a.div(b), [0.5, 1, 1.5]);
});
