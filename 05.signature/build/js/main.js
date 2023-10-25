"use strict";
// interface Post {
//     id: number
//     title: string
//     getLikeNumber: (like: number) => number
// }
const post1 = {
    id: 1,
    title: "post 1",
    getLikeNumber(like) {
        return like;
    },
};
post1.getLikeNumber(7);
const person1 = {
    id: 11,
    name: "jay",
};
// 속성을 추가해주고 싶다....
person1["age"] = 24;
const userNames = ["A", "B", "C"];
