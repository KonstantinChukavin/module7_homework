/*
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
*/

function keys(obj) {
    for (let key in obj) {
        if (objTest.hasOwnProperty(key)) {
            console.log(key);
            console.log(obj[key]);
        }
    }
}