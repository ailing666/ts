"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    getName() {
        console.log(this.name);
    }
}
let p1 = new Person();
p1.name = 'hello';
p1.getName();
// 定义存取器
class User {
    myName;
    constructor(myName) {
        this.myName = myName;
    }
    get name() {
        return this.myName;
    }
    set name(val) {
        this.myName = val;
    }
}
let user = new User('loveZero');
console.log(user.name);
user.name = 'haha';
console.log(user.name);
// 参数属性
class Father {
    name; // 公有的，自己、子类、其他类都能访问
    age; // 自己和自己的子类能访问，其他类无法访问
    money; // 私有的，只有自己能访问，子类和其他类都无法访问
    constructor(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    getName() {
        return this.name;
    }
}
class Child extends Father {
    constructor(name, age, money) {
        super(name, age, money);
    }
    desc() {
        console.log(this.name, this.age);
        // console.log(this.money); 无法访问
    }
}
let child = new Child('hello', 11, 100);
console.log(child.name);
// console.log(child.age); 无法访问
// console.log(child.money);无法访问
