// 布尔
const flag: boolean = true

// number
const num: number = 1

// string
const str: string = 'hello'

// 数组
const arr: string[] = ['1', '2']
const arr1: number[] = [1, 2]
const arr2: boolean[] = [true, false]
const arr3: Array<string> = ['1', '2']
const arr4: Array<number> = [1, 2]
const arr5: Array<boolean> = [true, false]

// 元祖:数量和类型已知的数组
const array: [string, number] = ['hello', 123]

// 普通枚举
enum Gender {
    GIRL,
    BOY
}
console.log(Gender['BOY'], Gender[1])
console.log(Gender['GIRL'], Gender[0])

// 常量枚举
const enum Colors {
    RED, YELLOW, BLUE
}
let myColors = [Colors.RED, Colors.YELLOW, Colors.BLUE]
console.log(myColors[0])

// 任意类型:如果变量定义为any，就和js差不多了
let root: any = document.getElementById("root")
let element: (HTMLElement | null) = document.getElementById("element")

// null,undefined是其他类型的子类型
// 如果strictNullChecks为true，则不能把undefined和null赋值给变量
let x: number = 1
// x = null
// x = undefined

let y: number | null | undefined
y = 1
y = null
y = undefined

let z: null = null

// never不会出现的值
// 1.作为不会返回的函数的返回值类型
function error(mes: string): never {
    throw new Error('报错了')
}

function loop(): never {
    while (true) { }
}

function fn(x: number | string) {
    if (typeof x === 'number') {
        console.log(x);
    } else if (typeof x === 'string') {
        console.log(x);
    } else {
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
function greeting(): void {
    return undefined
}
function foo(): void {
    return
}


// Symbol:唯一不变的值
// 需要ESNext
const s1 = Symbol('key')
const s2 = Symbol('key')
// console.log(s1 == s2); 永远返回false


// BigInt
const max = Number.MAX_SAFE_INTEGER // 2**53-1
console.log(max + 1 === max + 2);
// 需要ESNext
const max2 = BigInt(Number.MAX_SAFE_INTEGER)
// BigInt只能和BigInt类型运算
console.log(max2 + BigInt(1) === max2 + BigInt(2));
// 一个数字后面加n，就是大整形bigint
console.log(max2 + 1n === max2 + 2n); // 需要target改为ESNext

// number和BigINT不能相互赋值
let a1: number
let a2: bigint
// a1 = a2
// a2 = a1