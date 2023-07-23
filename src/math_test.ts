import { assertEquals } from "https://deno.land/std@0.195.0/assert/assert_equals.ts";
import { assert } from "https://deno.land/std@0.195.0/assert/assert.ts";

import "./math.ts";

Deno.test("randint", () => {
  const value = Math.randint(20, 25);
  assert(value >= 20 && value <= 25);
});

Deno.test("clip", () => {
  const value = Math.clip(1.5, 1.0, 1.2);
  assertEquals(value, 1.2);
});

