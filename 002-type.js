// 布尔
const flag = true;
// number
const num = 1;
// string
const str = 'hello';
// 数组
const arr = ['1', '2'];
const arr1 = [1, 2];
const arr2 = [true, false];
const arr3 = ['1', '2'];
const arr4 = [1, 2];
const arr5 = [true, false];
// 元祖:数量和类型已知的数组
const array = ['hello', 123];
// 普通枚举
var Gender;
(function (Gender) {
    Gender[Gender["GIRL"] = 0] = "GIRL";
    Gender[Gender["BOY"] = 1] = "BOY";
})(Gender || (Gender = {}));
console.log(Gender['BOY'], Gender[1]);
console.log(Gender['GIRL'], Gender[0]);
let myColors = [0 /* RED */, 1 /* YELLOW */, 2 /* BLUE */];
console.log(myColors[0]);
// 任意类型:如果变量定义为any，就和js差不多了
let root = document.getElementById("root");
let element = document.getElementById("element");
// null,undefined是其他类型的子类型
// 如果strictNullChecks为true，则不能把undefined和null赋值给变量
let x = 1;
// x = null
// x = undefined
let y;
y = 1;
y = null;
y = undefined;
let z = null;
// never不会出现的值
// 1.作为不会返回的函数的返回值类型
function error(mes) {
    throw new Error('报错了');
}
function loop() {
    while (true) { }
}
function fn(x) {
    if (typeof x === 'number') {
        console.log(x);
    }
    else if (typeof x === 'string') {
        console.log(x);
    }
    else {
        // never类型
        console.log(x);
    }
}
// void：没有任何类型
// 函数没有返回值，那么就是void
// 如果strictNullChecks为true，则不能把null赋值给void
// void和never的区别
// void可以被赋值为null和undefined，never不能包含任何类型
// 返回类型为void的函数还能执行，但是返回never的函数无法正常执行
function greeting() {
    return undefined;
}
function foo() {
    return;
}
// Symbol:唯一不变的值
// 需要ESNext
const s1 = Symbol('key');
const s2 = Symbol('key');
// console.log(s1 == s2); 永远返回false
// BigInt
const max = Number.MAX_SAFE_INTEGER; // 2**53-1
console.log(max + 1 === max + 2);
// 需要ESNext
const max2 = BigInt(Number.MAX_SAFE_INTEGER);
// BigInt只能和BigInt类型运算
console.log(max2 + BigInt(1) === max2 + BigInt(2));
// 一个数字后面加n，就是大整形bigint
console.log(max2 + 1n === max2 + 2n); // 需要target改为ESNext
// number和BigINT不能相互赋值
let a1;
let a2;
// a1 = a2
// a2 = a1
