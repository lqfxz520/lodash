import dropRightWhile from "../dropRightWhile.js";

const a = [
  { name: 'Bob', active: true },
  { name: 'Jim', active: false },
  { name: 'Tom', active: true },
]

const b = dropRightWhile(a, ({ active }) => active)
console.log(b)
