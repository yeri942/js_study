//ES6 set() 자료구조

//[!]
//ES6에서 새롭게 도립한 데이터 자료구조 --> map, set
//map은 key와 value를 한 쌍으로 묶는다는 점에서 객체와 유사
//set은 중복을 허용하지 않는 특징만 빼면 배열과 유사

//[1]:set
//set--> value, 즉 값들의 집합.

//[2]:특징
//중복을 허용하지X
//중복해서 같은 값을 추개해봤자 추가안됨. 그래서 중복을 제거하는 용도로도 많이 쓰임
//ex)
let ar2 = [1, 2, 3, 4, 5, 5];
console.log(ar2); // 1, 2, 3, 4, 5, 5
console.log(ar2[4]); // 5
console.log(ar2[5]); // 5
//이렇듯 배열은 중복이 가능하지만 set은 X

//[3]: set 사용법
// 생성 -> new
// 추가 -> add
// 삭제 -> delete

//생성
let ar3 = new Set(); //비어있는 set(집합)을 하나 생성함
console.log(ar3); //object set객체를 반환

//추가
ar3.add("a");
ar3.add("b");
ar3.add("c");
ar3.add("c");
ar3.add("c");
ar3.add("c");
console.log(ar3); // a, b, c

console.log(ar3[0]); // a? ㄴㄴ undefinend ㅇㅇ 뭔가 찐 배열과는 다름

//사이즈
console.log(ar3.size); //3

//삭제
ar3.delete("c");
console.log(ar3); // a, b

//한번에 모두 삭제 == clear()
ar3.clear();
console.log(ar3); // 다 비어있씀
