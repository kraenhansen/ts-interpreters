# ts-interpreters
Playground for TypeScript interpreters

## Options

### ts-node

- Weekly downloads: 19.2M
- Automatic sourcemaps in stack traces
- Automatic tsconfig.json parsing
- Automatic defaults to match your node version
- Typechecking (optional - but default)
- REPL
- Write standalone scripts
- Native ESM loader
- Use third-party transpilers
- Use custom transformers
- Integrate with test runners, debuggers, and CLI tools
- Compatible with pre-compilation for production

Note:
- Type checking is enabled by default.
- The default command (ts-node) confused when enabling ESM ("type": "module" in package.json) - use `ts-node-esm` instead.
- `ts-node-esm` doesn't automatically resolve "./index" as "./index.ts"

### tsx

- Weekly downloads: 207.6K
- Uses esbuild.
- Blazing fast on-demand TypeScript & ESM compilation
- Works in both CommonJS and ESM packages
- Supports next-gen TypeScript extensions (.cts & .mts)
- Supports node: import prefixes
- Hides experimental feature warnings
- TypeScript REPL
- Resolves tsconfig.json paths
- Tested on Linux & Windows with Node.js v12~18

### tsm

- Weekly downloads: 57K
- Supports node <file> usage
- Supports ESM --loader usage†
- Supports --require hook usage
- Optional configuration file for per-extension customization

Drawbacks:
- Prints warnings
- Needs the Node --enable-source-maps runtime option when

### Deno

A completely different JavaScript runtime with built-in TypeScript support.
