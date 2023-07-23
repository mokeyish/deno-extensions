import { assertEquals } from "https://deno.land/std@0.195.0/assert/assert_equals.ts";
import "./string.ts";

Deno.test("trim end", () => {
  assertEquals("https://deno.land/".trimEnd('/'), "https://deno.land");
});

Deno.test("trim end 1", () => {
  assertEquals("https://deno.land".trimEnd('/'), "https://deno.land");
});

Deno.test("trim start", () => {
  assertEquals("/api/1.0".trimStart('/'), "api/1.0");
});
Deno.test("trim start", () => {
  assertEquals("api/1.0".trimStart('/'), "api/1.0");
});