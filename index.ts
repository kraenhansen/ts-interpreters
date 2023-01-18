/**
 * Some comment which might screw up sourcemaps
 */

const [_, __, greeting = "Hello"] = process.argv;
console.log(`${greeting} TS Copenhagen!`);

// Let's do something to trigger a type failure
type Foo = { foo: number };
const foo: Foo = { foo: "string" };

throw new Error("Does source maps work?");
