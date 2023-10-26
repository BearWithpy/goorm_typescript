"use strict";
// 참고 자료:
// 1. https://fathory.tistory.com/160
// 2. https://velog.io/@from_numpy/TypeScript-infer
// 3. https://www.youtube.com/watch?v=hLZXJTm7TEk
/////////////////////////////////////////////////////////////////
function fn1(value) {
    const fn2 = (arg) => { };
    return fn2;
}
const result = fn1(false);
const result2 = fn1("string");
const A = "str";
// T는 문자열 리터럴의 유니온 타입이고, TypeA, TypeB, TypeC는 각 문자열 리터럴에 해당하는 타입
// 유니온의 각 문자열 리터럴을 확인하고 해당하는 타입으로 매핑
// type MappedTypes<T> = T extends "A" ? TypeA : T extends "B" ? TypeB : TypeC
// 조건부 타입은 배열 T가 최소한 하나의 요소를 가지는 배열인지 확인
// 만약 그렇다면 첫 번째 요소의 타입을 추론하고 반환하고, 그렇지 않으면 타입 never를 반환
function getFirstElement(arr) {
    return arr[0];
}
let noTUninon;
let noTQUninon;
const a = 1;
function fn(str) {
    return str;
}
