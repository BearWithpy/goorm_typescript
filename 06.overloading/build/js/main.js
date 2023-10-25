"use strict";
function add(a, b) {
    return a + b;
}
add("Hello, ", "world");
function saySomething(word) {
    if (typeof word === "string") {
        return word;
    }
    else if (Array.isArray(word)) {
        return word.join(" ");
    }
    throw new Error("Unable to say somrthing");
}
const newSay = (word) => {
    if (typeof word === "string") {
        return word;
    }
    else {
        return word.join(" ");
    }
};
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
