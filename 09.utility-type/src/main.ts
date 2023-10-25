interface Address {
    email: string
    address: string
}

const me: Partial<Address> = {}
const you: Partial<Address> = { email: "ttt@gmail.com" }
const all: Address = { email: "abc@rty.com", address: "YU" }

interface Todo {
    title: string
    description: string
    complete: boolean
    createdAt: number
}

type TodoPreview = Pick<Todo, "title" | "complete">
type TodoOmit = Omit<Todo, "description">

const todopre: TodoPreview = {
    title: "Do sonthing",
    complete: false,
}

const todoom: TodoOmit = {
    title: "Do it",
    complete: false,
    createdAt: 999000,
}

type Student = {
    firstname: string
    lastname?: string
}

// let reqStudent: Required<Student> = {
//     firstname: "junsu",
// }

interface CatInfo {
    age: number
    breed: string
}
type CatName = "miffy" | "boris" | "mordere"

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "jay" },
    boris: { age: 6, breed: "y" },
    mordere: { age: 10, breed: "pp" },
}

type T0 = ReturnType<() => string>
type T1 = ReturnType<(s: string) => void>

function fn(str: string) {
    return str
}

const a: ReturnType<typeof fn> = "Hello"
// const b: ReturnType<typeof fn> = true // error
