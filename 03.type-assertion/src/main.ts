// const bodyElement = document.querySelector("body") as HTMLBodyElement
// bodyElement.innerText = "Hello"

// const bodyElement = document.querySelector("body")
// bodyElement!.innerText = "Hello"

// Type Guard
const bodyElement = document.querySelector("body")
if (bodyElement) {
    bodyElement.innerText = "Hello"
}

// 타입 단언의 잘못된 예...
// function func(arg: string | null) {
//     return (arg as string).toLowerCase()
// }

function func(arg: string | null) {
    if (arg) {
        return arg.toLowerCase()
    }
}

func(null)
func("HELL")
