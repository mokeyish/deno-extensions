import { assertEquals } from "https://deno.land/std@0.195.0/assert/assert_equals.ts";
import { assert } from "https://deno.land/std@0.195.0/assert/assert.ts";
import { assertFalse } from "https://deno.land/std@0.195.0/assert/assert_false.ts";

import "./iterable-iterator.ts";

Deno.test("skip", () => {
  const v = ["a", "b", "c"];
  const v1 = v.values().skip(2).toArray();
  assertEquals(v1.length, 1);
  assertEquals(v1[0], "c");
});

Deno.test("skipWhile", () => {
  const v = ["a", "b", "c"];
  const v1 = v.values().skipWhile((s) => s === 'b').toArray();
  assertEquals(v1.length, 1);
  assertEquals(v1[0], "c");
});

Deno.test("take", () => {
  const v = ["a", "b", "c"];
  const v1 = v.values().take(2).toArray();
  assertEquals(v1.length, 2);
  assertEquals(v1[0], "a");
  assertEquals(v1[1], "b");
});

Deno.test("takeWhile", () => {
  const v = ["a", "b", "c"];
  const v1 = v.values().takeWhile(c => c === 'b').toArray();
  assertEquals(v1.length, 2);
  assertEquals(v1[0], "a");
  assertEquals(v1[1], "b");
});

Deno.test("find", () => {
  const v = ["a1", "b2", "c3"];
  const v1 = v.values().find((o) => o.startsWith('b'));
  assertEquals(v1, "b2");
});

Deno.test("forOf", () => {
  const v = ["a1", "b2", "c3"];
  for (const i of v.values().skip(2)) {
    assertEquals(i, "c3");
  }
});

Deno.test("sequenceEqual1", () => {
  const v1 = ["a1", "b2", "c3"];
  const v2 = ["a1", "b2", "c3"];

  assert(v1.values().sequenceEqual(v2.values()));
});

Deno.test("sequenceEqual2", () => {
  const v1 = ["a1", "b2", "c3"];
  const v2 = ["a1", "b3", "c3"];

  assertFalse(v1.values().sequenceEqual(v2.values()));
});