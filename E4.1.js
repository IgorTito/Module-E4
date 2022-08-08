// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения
// только собственных свойств. Данная функция не должна возвращать значение.

const first = {
    color: "red",
    weight: 5
}

const second = Object.create(first)

second.ownColor = "blue"
second.ownWeight = 10

function property(obj) {
    for(let k in obj){
        if(obj.hasOwnProperty(k)){
            console.log(`${k} - ${obj[k]}`)
        }
    }
}
property(second)