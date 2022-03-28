// [4]: 심볼 사용법(생성법)

//1. 심볼은 new연산자 사용 X -> Symbol()함수 사용하여 생성
let symbol = Symbol();

//2.괄호안은 비어두고 생성해두 댐. 문자열 넣어도 됨!
//보통 문자열은 단순 설명. 영향을 끼치지는 않음
//심볼은 매번 심볼 함수 호출시 새로운 심볼값을 생성.
let symbol2 = Symbol("심볼입니당");
let symbol3 = Symbol("심볼입니당");

console.log(symbol2 === symbol3); //false
console.log(symbol2 == symbol3); //false

// [5]: 심볼의 출력 형태
//이때, 심볼 값은 문자열 형태로 변환할 수 없슴.

let symbol5 = Symbol("age");
alert(symbol5); // 오류남.

console.log(symbol5); //Symbol(age) 로 출력.

// [6]: 심볼형은 for...in 구문으로 반복시 출력되지 X
//배열객체에 속성을 추가하면 -> for---in반복문으로 출력시 해당 속성도 함께 출력
let ar6 = [1, 2, 3, 4, 5];
ar6.someProperty = 10;

for (let i in ar6) {
    console.log(i); //0,1,2,3,4,someProperty
}

//심볼형 사용하면
let ar7 = [1, 2, 3, 4, 5];
let someProperty = Symbol("someProperty");

ar7[someProperty] = 10;

for (let i in ar7) {
    console.log(i); //0,1,2,3,4 --> someProperty 속성이 보이지않음.
}
