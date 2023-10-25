// interface Post {
//     id: number
//     title: string
//     getLikeNumber: (like: number) => number
// }

// getLikeNumber의 타입을 재사용 하고 싶다!!
interface getLikeNumber {
    // 호출 시그니처를 이용하여...(call signature)
    (like: number): number
}

interface Post {
    id: number
    title: string
    getLikeNumber: getLikeNumber
}

const post1: Post = {
    id: 1,
    title: "post 1",
    getLikeNumber(like) {
        return like
    },
}

post1.getLikeNumber(7)

///////////////////////////////////////////////////////

interface Person {
    // index signature
    [key: string]: unknown
    id: number
    name: string
}

const person1: Person = {
    id: 11,
    name: "jay",
}

// 속성을 추가해주고 싶다....
person1["age"] = 24

interface Names {
    [item: number]: string
}
const userNames: Names = ["A", "B", "C"]
