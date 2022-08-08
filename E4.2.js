// Написать функцию, которая принимает в качестве аргументов строку и объект,
//     а затем проверяет есть ли у переданного объекта свойство с данным именем.
//     Функция должна возвращать true или false.

function search(str, obj) {
    for (let k in obj){
        if (k === str){
            console.log(true)
        } else {
            console.log(false)
        }
    }
}
const obj1 = {
    a: "123",
    b: 456,
    c: "789"
}
search('a', obj1)
