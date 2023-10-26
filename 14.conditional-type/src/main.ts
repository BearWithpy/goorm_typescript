// 참고 자료:
// 1. https://fathory.tistory.com/160
// 2. https://velog.io/@from_numpy/TypeScript-infer
// 3. https://www.youtube.com/watch?v=hLZXJTm7TEk
// 4. https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%A1%B0%EA%B1%B4%EB%B6%80-%ED%83%80%EC%9E%85-%EC%99%84%EB%B2%BD-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0

type SomeType = number
type ConditionalType = SomeType extends string ? string : null // --> null 타입!!

/////////////////////////////////////////////////////////////////
function fn1<T>(value: T) {
    const fn2 = (arg: T extends boolean ? "A" : "B") => {}
    return fn2
}

const result = fn1(false)
const result2 = fn1("string")
////////////////////////////////////////////////////////////////

type StringOrNot<T> = T extends string ? string : never

const A: StringOrNot<string> = "str"
// const B: StringOrNot<number> = 'str' // Type 'string' is not assignable to type 'never'

// T는 배열의 타입이고, K는 필터링할 속성의 타입
// 조건부 타입은 배열의 각 요소가 타입 K의 속성을 가지는지 확인
// 속성을 가지면 결과 타입에 포함되고, 그렇지 않으면 제외
type FilteredObjects<T, K> = T extends { [P in keyof T]: K } ? T : never

// T는 문자열 리터럴의 유니온 타입이고, TypeA, TypeB, TypeC는 각 문자열 리터럴에 해당하는 타입
// 유니온의 각 문자열 리터럴을 확인하고 해당하는 타입으로 매핑
// type MappedTypes<T> = T extends "A" ? TypeA : T extends "B" ? TypeB : TypeC

// 조건부 타입은 배열 T가 최소한 하나의 요소를 가지는 배열인지 확인
// 만약 그렇다면 첫 번째 요소의 타입을 추론하고 반환하고, 그렇지 않으면 타입 never를 반환
function getFirstElement<T extends any[]>(
    arr: T
): T extends [infer U, ...any[]] ? U : never {
    return arr[0]
}

// T는 객체의 타입이고, U는 필터링할 속성의 타입입니다.
// 조건부 타입은 객체의 각 속성을 확인
// 속성이 타입 U인 경우 결과 타입에 포함, 그렇지 않으면 제외
type FilteredProperties<T, U> = {
    [K in keyof T]: T[K] extends U ? T[K] : never
}

////////////////////////////////////////////////////////////////

// 각각의 타입이 string | number에 할당 가능한지 distributively 비교함
type ExType<T> = T extends string | number ? T : never
type MyEx = ExType<string | number | boolean> // string | number

// 통으로 비교
type ExTypeNoDistFunc<T> = (() => T) extends () => string | number ? T : never
type ExTypeNoDistTup<T> = [T] extends [string | number] ? T : never
type MyExNoDis = ExTypeNoDistFunc<string | number | boolean> // never
type MyExNoDisStr = ExTypeNoDistTup<string | number> // string | number
type MyExNoDisStr2 = ExTypeNoDistTup<number> // number

////////////////////////////////////////////////////////////////
// union 타입에서 never들은 전부 제거됨..
// 제거할 멤버를 정함
type unionType = "T" | "Q" | "R" | "S"

let noTUninon: Exclude<unionType, "T">
let noTQUninon: Exclude<unionType, "T" | "Q">

////////////////////////////////////////////////////////////////

// extends랑만 사용이 가능한 infer

// TS가 U의 타입을 추론하여 T가 U에 할당이 가능하면 SomeType은 U 아니면 Y이다
// T가 U에 최대한 할당 가능하게 U의 타입을 TS에게 추론하라고 하는 것

// type SomeType = T extends infer U ? U : Y

type InferEx<T> = T extends infer R ? R : null
const a: InferEx<number> = 1

type InferEx2<T> = { a: "hi"; b: 1 } extends { a: infer A; b: 1 } ? A : any
type Inferred = InferEx2<{ a: "hi"; b: 1 }>
//////////////////////////////////////////////////////////////////

type CType<T> = T extends { a: infer A; b: infer B } ? A & B : any
type Inferred2 = CType<{ a: { someA: 1 }; b: { someB: 2 } }>

//////////////////////////////////////////////////////////////////

// 컴파일 과정에서 타입을 미리 명시해주지 않아도, 혹은 그러한 경우가 효율적이지 못할 경우
// infer 을 이용해서 런타임 과정에서 타입을 제시해 컴파일러가 추론할 수 있도록 함

type T0 = ReturnType<() => string>
type T1 = ReturnType<(s: string) => void>
function fn(str: string) {
    return str
}
type T2 = ReturnType<typeof fn>

// 정의가 어떻게 되어있는지 살펴보자!!
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

// type FakeReturnType<T> = T extends (...args: any) => infer R
//     ? R extends string
//         ? `${R}_return_type`
//         : never
//     : never

type FakeReturnType<T> = T extends ((...args: any) => infer R extends string)
    ? `${R}_return_type`
    : never

//////////////////////////////////////////////////

type GetFromDeepObject<T> = T extends
    | {
          a: {
              b: {
                  c: infer C
              }
          }
      }
    | {
          c: infer C
      }
    | {
          a: {
              c: infer C
          }
      }
    ? C
    : never

type Ctype = GetFromDeepObject<{
    a: {
        b: {
            d: number
        }
    }
}> // never
