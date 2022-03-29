// 자바스크립트 객체 이야기2 - 프로토타입(Prototype)

// [1] : 프로토타입이란 무엇인가?
// JS는 프로토타입 기반의 언어이다. --> 이를 기반으로 확장과 재사용성을 업업
// 사전적의미 --> Prototype : 원형 --> 이러한 사전적의미와 같은 개념으로 자바스크립트에서도 사용.
// 객체의 프로토타입(원형)을 가지고 새로운 객체를 생성해가는 프로그래밍 방식.
// 즉, 생성된 객체는 자기자신의 프로토타입을 갖는다. --> 즉, 자기자신이 만들어지게된 원형을 안다.
// 다소 생소 --> 조금 어렵...

// [2] : Prototype vs Class
// 지금은 자바스크립트도 Class를 문법적으로 지원하기 시작했지만... 원래 자바스크립트는 프로토타입 기반의 언어.
// 즉, 기존에는 Class라는게 없었다.
// 그래서, 객체의 원형인 프로토타입을 이용하여 객체의 확장과 재사용, 상속 등을 구현해나감
// Prototype 객체는 new 연산자에 의해서 생성된 객체 --> 공유 프로퍼티, 메서드 등을 제공하기 위해서 사용

// [3] : 예
const fruit = { name: "apple" };
console.log(fruit.name); // apple

// 속성 추가
fruit.expiration = "20241231";
console.log(fruit.expiration);

// 속성이 있는지 없는지 체크? --> hasOwnProperty() 메서드 사용.
console.log(fruit.hasOwnProperty("expiration")); // true
console.log(fruit.hasOwnProperty("country")); // false

// hasOwnProperty() 메서드는 fruit 객체가 어떻게 쓰는거지???
console.log(fruit);

const aaa = {};
console.log(aaa); // __proto__

// hasOwnProperty() --> fruit2() 객체에서 정의해버리면?
const fruit2 = {
    name: "apple",
    expiration: "1234",
    hasOwnProperty: function () {
        console.log("하이룽");
    },
};

fruit2.hasOwnProperty(); // 하이룽
