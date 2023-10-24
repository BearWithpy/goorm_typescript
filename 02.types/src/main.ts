// let username = "junsu"
// console.log(username)

let bool: boolean
let falseBoolean = false

// 여러 타입을 가지는 배열
let mixedArray: (string | number)[] = ["jay", 1, 2]

// 여러 타입을 단언 할 수 없을 경우
let anyArray: any = ["J", 1, false]

// 읽기 전용 배열
let stringArray: readonly string[] = ["a", "b"]
let numberArray: ReadonlyArray<number> = [1, 2, 3, 4]

// tuple -> 순서와 개수를 잘 맞춰 줘야 함
let tuple1: [string, number]
tuple1 = ["a", 1]

let users: [number, string][]
users = [
    [1, "J"],
    [2, "B"],
]

// push 메소드를 사용하면 들어가짐... 없는 타임은 들어가지 않음
let tuple2: [string, number]
tuple2 = ["a", 1]
tuple2.push(2)

// any는 사용 안하는 것이 좋지만, third party app 같은데서 사용 할 수도?
// unknown은 any와 비슷하지만?
let unk: unknown = false

// 할당은 불가함
// let bool: boolean = unk

// 단언하면 할당 가능... type assertion
let boolDan: boolean = unk as boolean

const person: { id: number; title: string } = {
    id: 1,
    title: "Hello World",
}

// function
let func1: (arg1: number, arg2: number) => number
func1 = function (s, t) {
    return s * t
}

// void에는 undefined값 할당은 가능함

// tsconfig에서, "strictNullChecks": false로 해줄 경우?
// null, undefined...는 모든 타입에 할당이 가능해짐

function greeting(): void {
    console.log("hi")
}
const hi = greeting() // undefined

// never
function throwNever(): never {
    throw new Error("error")
}

// 빈 배열 타입으로 잘못 선언하면? never
const nev: [] = []
