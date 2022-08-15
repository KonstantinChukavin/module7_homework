/*
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
*/

function Device(smartphone, power) {
    this.score = 'citylink';
    this.capacity = function () {
        console.log(`Battery capacity ${smartphone} is - ${power} mAh`);
    }
}

const samsung = new Device('galaxy S22 Ultra', 5000);
samsung.system = 'Android 12';
samsung.cpu = 'Samsung Exynos 2200';
samsung.price = '2020$';

const apple = new Device('iPhone 13 Pro Max', 4352);
apple.system = 'iPhone iOS 15';
apple.cpu = 'Apple A15 Bionic';
apple.price = '2250$';

const xiaomi = new Device('Poco M3 Pro 6', 5000);
xiaomi.gpu = 'ARM Mali-G57';
xiaomi.cpu = 'MediaTek Dimensity 700';
xiaomi.price = '260$';

samsung.capacity();
apple.capacity();
xiaomi.capacity();

console.log('apple', apple, 'samsung', samsung, 'xiaomi', xiaomi);