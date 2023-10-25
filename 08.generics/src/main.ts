/// 재사용성이 높아지고
// 컴파일러가 타입을 체크하기 때문에 더 안정적이다.

function getArrayLength<T>(arr: T[]): number {
    return arr.length
}

const arr = [1, 2, 3, 4, 5]

getArrayLength<number>(arr)

/////////////////////////////////////////

interface Vehicle<T> {
    name: string
    color: string
    option: T
}

const car: Vehicle<{ price: number }> = {
    name: "CAR",
    color: "red",
    option: {
        price: 20000,
    },
}

const bike: Vehicle<boolean> = {
    name: "bike",
    color: "black",
    option: false,
}

//////////////////////////////////////////////

const makeFullName = <T extends { firstName: string; lastName: string }>(
    obj: T
) => {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName,
    }
}

makeFullName({ firstName: "junsu", lastName: "park", location: "Gumi" })

//////////////////////////////////////////////////////////////////////////

type sayOverloading<T> = {
    (word: T): string
}
const newSay: sayOverloading<string | string[]> = (word) => {
    if (typeof word === "string") {
        return word
    } else {
        return word.join(" ")
    }
}
