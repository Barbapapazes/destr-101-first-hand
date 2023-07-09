import { safeDestr } from 'destr'

const invalidResult = safeDestr('{"foo": "bar", "baz": 42')
