/*
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
*/


function property(name, obj) {

    if (obj.hasOwnProperty(name) === true) {
        return true;
    }
    else {
        return false;
    }
}