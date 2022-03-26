//ES6 set() 자료구조 - 반복

//[!]
let ar = ["a", "b", "c", "d", "e"];

//[1]:전통적인 for 반복문
for (let index = 0; index < ar.length; index++) {
    console.log(ar[i]);
}
// a
// b
// c
// d
// e
console.log("------------------------");

//[2]:forEach() 메서드를 사용한 반복
ar.forEach((x) => console.log(x));
// a
// b
// c
// d
// e
console.log("------------------------");

//[2]:Set의 다양한 메서드 - keys(), values()
let testSet3 = new Set(["tiger", "lion", "dog", "cat"]);
testSet3.add("hippo");
console.log(testSet3); //{"tiger", "lion", "dog", "cat", "hippo"}

console.log(testSet3[0]); // tiger가 출력이 되는게 아닌 undefined가 출력됨!

for (let index in testSet3) {
    console.log(index);
}
// undefined

for (let index of testSet3) {
    console.log(index);
}
// tiger
// lion
// dog
// cat
// hippo

let arr = [...testSet3];
console.log(arr); // ["tiger", "lion", "dog", "cat", "hippo"]
console.log(arr[0]); // tiger

console.log("------------------------");

// keys() 메서드 --> Iterator(반복자) 객체를 반환 --> next() 메서드

const key_itr = testSet3.keys();

console.log(key_itr.next().value); //tiger
console.log(key_itr.next().value); //lion
console.log(key_itr.next().value); //dog

console.log("------------------------");

// values() 메서드 --> Iterator(반복자) 객체를 반환 --> next() 메서드
const val_itr = testSet3.values();

console.log(val_itr.next().value); //tiger
console.log(val_itr.next().value); //lion
console.log(val_itr.next().value); //dog

console.log("------------------------");

// [5]:entries() 메서드
let testSet5 = new Set();

testSet5.add("홍길동");
testSet5.add("이순신");
testSet5.add("강감찬");

const entries = testSet5.entries();

for (const i of entries) {
    console.log(i);
}
// ["홍길동", "홍길동"]
// ["이순신", "이순신"]
// ["강감찬", "강감찬"]

console.log("------------------------");

//삽입순으로 set요소 각각에 대해서 [value, value] 배열 형식으로 새로운 객체를 반환.
