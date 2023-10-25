function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: any, b: any): any {
    return a + b
}

add("Hello, ", "world")

// 흠? 유니온 타입과 오버로딩은 취향 차이???
// function saySomething(word: string | string[]): string {
//     if (typeof word === "string") {
//         return word
//     } else if (Array.isArray(word)) {
//         return word.join(" ")
//     }
//     throw new Error("Unable to say somrthing")
// }

function saySomething(word: string): string
function saySomething(word: string[]): string
function saySomething(word: any): any {
    if (typeof word === "string") {
        return word
    } else if (Array.isArray(word)) {
        return word.join(" ")
    }
    throw new Error("Unable to say somrthing")
}

/////////////////////////////////////

// 인자가 여러 개
type sayOverloading = {
    (word: string): string
    (word: string[]): string
}

const newSay: sayOverloading = (word: string | string[]) => {
    if (typeof word === "string") {
        return word
    } else {
        return word.join(" ")
    }
}

// 인자의 타입이 여러 개
// type SpecialAdd = (a: number | string, b: number | string) => number | string

// const specialAdd: SpecialAdd = (a, b) => {
//     if (typeof a === "number" && typeof b === "number") {
//         return a + b
//     } else if (typeof a === "string" && typeof b === "string") {
//         return a + b
//     } else {
//         throw TypeError
//     }
// }
