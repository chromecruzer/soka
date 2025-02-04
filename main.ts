// export function add(a: number, b: number): number {
//   return a + b;
// }

// // Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
// if (import.meta.main) {
//   console.log("Add 2 + 3 =", add(2, 3));
// }


/// Soka CLG

// Fetching the data asynchronously
const source = fetch("https://raw.githubusercontent.com/chromecruzer/backups/refs/heads/master/Final%20Blaze.txt")
  .then((data) => data.text())
  .catch((err) => {
    console.log(`failed to fetch ${err}`);
    return "Failed to fetch the data."; // Return a default message in case of failure
  });

Deno.serve(async (_req) => {
  // Wait for the promise to resolve before returning the response
  const content = await source;
  return new Response(content, {
    headers: { "Content-Type": "text/plain" }
  });
});
