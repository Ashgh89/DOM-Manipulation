// querySelector => that means just the first element
// ------------------------------------------------
// 2.
// first step
const el1 = document.querySelector(".test"); // selecting or grab

// first way
el1.style.color = "red";
el1.style.fontSize = "5rem";

// second way (better)
el1.style.cssText = `color: green; 
font-size: 10px; 
background: orange; `;

// querySelectorAll => that means all elements
// length starts always with 1 NOT ZERO
const el2 = document.querySelectorAll(".test, .test1");
for (let i = 0; i < el2.length; i++) {
  // first way to style
  //   el2[i].style.color = "orange";

  // better way to style
  el2[i].style.cssText = `font-size: 40px; color: #0891b2`;
}

// If you want to see your parent on console
const el3 = document.querySelector("h1").parentNode.nodeName;
console.log(el3); // BODY

//------------------------------------------
// 3.
// getElementById => grab or select the first element
// first step (selecting or grab)
const el4 = document.getElementById("two");
console.log(el4); // <div id="two" class="example">Hello</div>

// style => color background
el4.style.cssText = `color: blue; background: pink; `;

// -------------------------------------
// 4.
// first way
document.querySelector("#a").style.backgroundColor = "red";
document.querySelector("#a").style.fontSize = "3rem";

// better way
document.querySelector(
  "#a"
).style.cssText = `color: lightBlue; background: red; padding: 30px`;

// --------------------------------------
// 5.
// How to access CSS file from here (just see your CSS file and compare it)
document.getElementById("div1").className = "ourClass blue myFont";

// --------------------------------
// 6.
// we can grab or select ELEMENTS with JUST CLASS
// You can grab more elements
const el5 = document.getElementsByClassName("myDiv");
console.log(el5);

const el6 = document.getElementsByTagName("div");
console.log(el6);

//---------------------------------------------
// 1.
// first step grab or select our ul
const ul1 = document.querySelector("ul");

// create a new li element
const newLi = document.createElement("li");

// added new li to ul
ul1.append(newLi);

// Add some text (innerText)
newLi.innerText = "JavaScript"
// class => red and ourClass
newLi.setAttribute("class", "red ourClass");

newLi.removeAttribute("class");

newLi.classList.add("myFont", "ourClass" , "green");
newLi.classList.remove("myFont", "green");

// ----------------------------
// 7.
// to convert our input to a button 
// first step (grab or select) and after that give our attribute
document.getElementById("myInput").setAttribute("type", "button")


