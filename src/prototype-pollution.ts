const data = JSON.parse('{"foo": "bar", "baz": 42, "__proto__": { "isAdmin": "true" } }')

const user = Object.assign({}, data)

console.log(data)
console.log(data.isAdmin)
console.log(user)
console.log(user.isAdmin)
