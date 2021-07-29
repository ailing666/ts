export { }
// 类装饰器

function addNameEat(constructor: Function) {
    constructor.prototype.name = 'hello'
    constructor.prototype.eat = function () { }
}
@addNameEat
class Person {
    name: string
    eat: Function
    constructor() { }
}
let p: Person = new Person()
console.log(p.name);
