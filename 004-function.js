function hello(name) {
    console.log(name);
}
hello('loveZero');
let getName = function (firstName, lastName) {
    return firstName + lastName;
};
// 可选参数
function getInfo(name, age) {
    console.log(name, age);
}
getInfo('test');
getInfo('test', 56);
// 默认参数
function ajax(url, method = 'GET') {
    console.log(url, method);
}
ajax('/');
// 剩余参数
function sum(...numbers) {
    return numbers.reduce((val, item) => val + item);
}
console.log(sum(1, 2, 3, 6));
// 函数重载
let obj = {};
// console.log(); 函数声明和函数实现必须连在一起 ，不能分开
function attr(val) {
    if (typeof val === 'string') {
        obj.name = val;
    }
    else if (typeof val === 'number') {
        obj.age = val;
    }
}
// attr(true)
attr(123);
attr('hello');
console.log(obj);
function attr2(val) {
    if (typeof val === 'string') {
        obj.name = val;
    }
    else if (typeof val === 'number') {
        obj.age = val;
    }
}
// attr2(true)
attr2(123);
attr2('hello');
console.log(obj);
function add(a, b) {
}
add(1, 23);
add('a', 'b');
// add('1', 45)
