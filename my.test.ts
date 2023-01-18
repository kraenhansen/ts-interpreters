describe(`Interpreting TypeScript using ${process.execArgv}`, () => {
  it("simply works", () => {
    type Foo = {};
    const foo: Foo = {};
    throw new Error("Does source-maps work?");
  });
});