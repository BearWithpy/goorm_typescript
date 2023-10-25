"use strict";
/// 재사용성이 높아지고
// 컴파일러가 타입을 체크하기 때문에 더 안정적이다.
function getArrayLength(arr) {
    return arr.length;
}
const arr = [1, 2, 3, 4, 5];
getArrayLength(arr);
const car = {
    name: "CAR",
    color: "red",
    option: {
        price: 20000,
    },
};
const bike = {
    name: "bike",
    color: "black",
    option: false,
};
//////////////////////////////////////////////
const makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
makeFullName({ firstName: "junsu", lastName: "park", location: "Gumi" });
const newSay = (word) => {
    if (typeof word === "string") {
        return word;
    }
    else {
        return word.join(" ");
    }
};
