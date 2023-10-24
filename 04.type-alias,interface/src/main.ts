// type interface 모두 implements 사용 가능

// interface -> 선언을 병합할 수 있음; 따로 놔둬도 합쳐짐
interface Animal {
    name: string
}

interface Animal {
    live: string
}

interface Bear extends Animal {
    honey: boolean
}

const bear1: Bear = {
    name: "honey bear",
    live: "land",
    honey: false,
}

// type alias ->  선언 병합 안됨
// type Animal = {
//     name: string
// }

// type Bear = Animal & {
//     honey: boolean
// }

// const bear1: Bear = {
//     name: "honey bear",
//     honey: true,
// }

// interface로 선언하던 type으로 선언하던 ,union을 사용하면 새로운 타입을 만들기 가능
// 그러나 항상 선언은 type으로 해야함
type NewType = Animal | Bear
