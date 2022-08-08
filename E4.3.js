// Написать функцию, которая создает пустой объект, но без прототипа.

function notProto() {
    return Object.create(null)
}

console.log(notProto)