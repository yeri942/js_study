// 자바스크립트 함수의 내부와 객체간의 관계

// [1]:함수가 만들어지고 수행이 되어지면
// 내부에서는
// 1. 함수 자신 (ex. Animal 함수) 그리고 같은 이름의 프로토 타입 객체가 생성
// 2. Animal함수의 멤버로 --> 프로토 타입 속성이 생성 --> 다른 곳에 생성된 같은 함수 이름의 Animal 프로토타입 객체를 가리킴(참조)

function Animal() {}

// Animal 함수                                              Animal 프로토타입 객체
// +프로토타입 --> Animal 프로토타입 객체(참조)              +constructor --> Animal 함수(참조)
//                                                          +run()

// 이런 상황일때 --> Animal 프로토타입 객체는 생성자 함수와 new 연산자를 통해서 만들어내는 모든 객체의 원형이 되는 객체가 됨

let tiger = new Animal();
let lion = new Animal();
// 이렇게 new 연상자와 생성자 함수를 이용하여 객체 생성시 각 객체에는 __proto__속성이 자동으로 생성.
// __proto__는 이 객체가 만들어 질 수 있도록 해준 원형 (부모 즉 Animal 프로토타입 객체)를 숨은 링크로 가르킴

console.log(tiger); //__proto__:Object
console.log(lion); //__proto__:Object

// Animal 프로토타입 객체는 tiger, lion과 같은 객체들의 원형이 되는 객체
// 따라서 tiger, lion과 같은 객체들은 모두 이 Animal 프로토타입 객체에 접근이 가능하고
// 동시에 이 Animal 프로토타입 객체에 멤버 한개를 추가하면 tigerm lion 객체들도 동시에 이 멤버를 공유해서 모두가 사용이 가능.

// 그럼 어떻게 이 Animal 프로토타입 객체에 멤버 하나를 추가하는거징?
Animal.prototype.aniRun = function () {
    return "동물이 달린다";
};

console.log("-------------------------------------");

console.log(tiger.aniRun()); // 동물이 달린다
console.log(lion.aniRun()); // 동물이 달린다

// 부모에 있는 aniRun() 메서드를 tiger, lion 객체 내에 만들어버리면 객체 내에 만든 aniRun이 적용됨
// tiger 객체 내에 aniRun() 메서드를 새롭게 추가
tiger.aniRun = function () {
    return "호랑이가 달린다앙";
};

console.log("-------------------------------------");

console.log(tiger.aniRun()); // 호랑이가 달린다앙
