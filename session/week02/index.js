console.log('hi');
const mango = document.createElement("li");

// 텍스트 추가 방법 1
const mangoText=document.createTextNode('mango');

// 텍스트 추가 방법 2
// mango.innerText = "mango";

mango.appendChild(mangoText);

const fruitList=document.querySelector("ul");

fruitList.appendChild(mango);

const redFruit= document.querySelectorAll(".red");
// console.log(redFruit);
redFruit.forEach((fruit)=>{
    fruit.remove(); // 화살표 방식의 콜백함수를 사용한 것
})

const thirdFruit = document.querySelector("li:nth-child(3)");

thirdFruit.classList.add("blue");
console.log(thirdFruit.classList);