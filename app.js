const { dispatchNodeArgs } = require('./utils/dispatchNodeArgs')

const arg = process.argv[2]

const result = process.argv.length == 3 ? dispatchNodeArgs(arg) : '--- please, pass an argument like `--filter=ry` or `--count`'

console.dir(result, { depth: null});
