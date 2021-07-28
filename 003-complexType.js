// 类型推导
let str3; // 推导为any
let myName = 'loveZero'; // 推导为string
// myName = true
//包装对象 wrapper object
//原始类型 对象类型
//原始类型 string
//如果内部自动帮你包装成对象类型，可以调方法
let name2 = 'hello';
console.log(name2.toUpperCase());
console.log('相当于', new String(name2).toUpperCase());
// 联合类型
let name3;
name3 = 'hello';
console.log(name3.length);
name3 = 1;
console.log(name3.toFixed(2));
// 类型断言:强行断言为某一类型
let name4;
console.log(name4.toFixed(2));
console.log(name4.length);
// 双重断言
// console.log((name4! as boolean));  不能将number|string断言为bool
console.log(name4); // 先断言为any再断言为bool
// 字面量类型
const up = 'Up';
const left = 'Left';
const right = 'Right';
const down = 'Down';
function move(direction) {
}
move('Left');
let p1 = {
    name: 'aa',
    age: 11
};
