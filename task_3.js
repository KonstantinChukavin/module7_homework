/*
Написать функцию, которая создает пустой объект, но без прототипа.
*/

function obj() {
    const obj = Object.create(null);
}

/*
Чтобы создать объект без прототипа, 
можно вызвать метод Object.create() c параметром null. 
Т.к. прототипом любого объекта при создании его с помощью литерала объекта или конструктора 
Object является Object.prototype, создать «обычный» объект можно с помощью Object.create(Object.prototype).
*/