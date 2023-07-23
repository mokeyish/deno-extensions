# Deno Extensions

A collection Extension Methods for TypeScript (Deno).

## Examples

- Array

  ```ts
  import "https://deno.land/x/extensions/array.ts";
  
  const v1 = [1, 2, 5, 1];
  assertEquals(v1.count(v => v === 1), 2);
  ```

  

- String

  ```ts
  import "https://deno.land/x/extensions/string.ts";
  
  assertEquals("/abc/".trimStart('/'), "abc/");
  assertEquals("/abc/".trimEnd('/'), "/abc");
  ```

- Prompse

  ```ts
  import "https://deno.land/x/extensions/promise.ts";
  
  const x = await Promise.yield(3000); // wait 3 seconds to continue
  ```

- Math

  ```ts
  import "https://deno.land/x/extensions/math.ts";
  
  const value = Math.randint(20, 25);
  assert(value >= 20 && value <= 25);
  ```