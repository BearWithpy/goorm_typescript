type AppConfig = {
    username: string
    email: string
    // image: string
}

type AppPermissions = {
    changeUsername: boolean
    changeEmail: boolean
    // changeImage: boolean
}

// 두 개의 타입 사이에는 암시적 관계가 있어 문제가 있음
// AppConfig의 하나의 타입이 바뀌면 AppPermissions에서 해당 boolean 값이 추가해야 됨 -> 의존적??

type Users = "j" | "a" | "y"
type UserFirstNames = { [K in Users]: string }
const UserFirstNameInfo: UserFirstNames = {
    j: "Doe",
    a: "hoho",
    y: "jun",
}

///////////////////////////////////////////////////////////////////////////////////////

// 프러퍼티 값을 모두 다 가지지 않을 수도 있으니...
type DeviceFormatter<T> = {
    [K in keyof T]?: T[K]
}

type Device = {
    manufacturer: string
    price: number
}

const iphone: DeviceFormatter<Device> = { manufacturer: "apple", price: 100 }
