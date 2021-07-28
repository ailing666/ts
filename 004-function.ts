function hello(name: string): void {
    console.log(name);
}
hello('loveZero')

type GetName = (firstName: string, lastName: string) => string
let getName: GetName = function (firstName: string, lastName: string): string {
    return firstName + lastName
}

// 可选参数
function getInfo(name: string, age?: number): void {
    console.log(name, age);
}
getInfo('test')
getInfo('test', 56)

// 默认参数
function ajax(url: string, method: string = 'GET') {
    console.log(url, method);
}
ajax('/')

// 剩余参数
function sum(...numbers: number[]) {
    return numbers.reduce((val, item) => val + item)
}
console.log(sum(1, 2, 3, 6));

// 函数重载
let obj: any = {}
function attr(val: string): void
function attr(val: number): void
// console.log(); 函数声明和函数实现必须连在一起 ，不能分开
function attr(val: any): void {
    if (typeof val === 'string') {
        obj.name = val
    } else if (typeof val === 'number') {
        obj.age = val
    }
}
// attr(true)
attr(123)
attr('hello')
console.log(obj);

function attr2(val: string | number): void {
    if (typeof val === 'string') {
        obj.name = val
    } else if (typeof val === 'number') {
        obj.age = val
    }
}
// attr2(true)
attr2(123)
attr2('hello')
console.log(obj);


function add(a: string, b: string): void
function add(a: number, b: number): void
function add(a: string | number, b: string | number): void {

}
add(1, 23)
add('a', 'b')
// add('1', 45)
