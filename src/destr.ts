import { destr } from 'destr'

const unknownResult = destr('{"foo": "bar", "baz": 42}') // Retourne un type unknown

interface Result {
  foo: string
  baz: number
}

const typedResult = destr<Result>('{"foo": "bar", "baz": 42}') // Retourne un type Result

const invalidResult = destr('{"foo": "bar", "baz": 42') // Retourne la valeur originale
console.log(invalidResult) // {"foo": "bar", "baz": 42

const prototypePollutionResult = destr('{"foo": "bar", "baz": 42, "__proto__": { "isAdmin": "true" } }')
console.log(prototypePollutionResult) // {"foo": "bar", "baz": 42}

const knownString = destr('TRUE')
console.log(knownString) // true
