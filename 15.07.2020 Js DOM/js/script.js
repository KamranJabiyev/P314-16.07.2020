//HOMEWORK
// function GetLetterCount(str) {
//     let result = {};
//     for (const letter of str) {
//         if (result[letter.toLowerCase()] === undefined) {
//             result[letter.toLowerCase()] = 1;
//         } else {
//             result[letter.toLowerCase()] += 1;
//         }
//     }
//     return result;
// }

// console.log(GetLetterCount("Kamrank"))

//JS DOM
// console.log(document.getElementById("test"))
// console.log(document.getElementsByClassName("elm"))
// console.log(document.getElementsByTagName("div"))

// console.log(document.querySelector("#test"))
// console.log(document.querySelector(".elm"))
// console.log(document.querySelectorAll(".elm"))

// let allDiv=document.querySelectorAll(".elm");

// for (const item of allDiv) {
//     console.log(item)
// }

// let elm = document.querySelector(".elm p");
// elm.innerHTML = "<b>P314</b>";
// console.log(elm.innerText)

// let input = document.getElementById("input");
// console.log(input.value)
// input.value = "P314";

// let addBtn = document.getElementById("add");

// addBtn.onclick = function () {
//     alert("Salam P314")
// }

// addBtn.addEventListener("click",function(){
//     alert("Salam P314 listener")
// })

// addBtn.onclick = function () {
//     alert("Sagol P314")
// }

// addBtn.addEventListener("click",function(){
//     alert("Sagol P314 listener")
// })

// let addBtn = document.getElementById("add");
// let input = document.getElementById("input");
// let parentUl = document.querySelector("#parent");
// let removeBtn = document.getElementById("remove");
// let removeSelected = document.getElementById("removeSelected")

// addBtn.addEventListener("click", function () {
//     // debugger;
//     parentUl.innerHTML = "";

//     let count = input.value;
//     for (let i = 1; i <= count; i++) {
//         let Li = document.createElement("li");
//         Li.innerText = i;
//         Li.className = "list-group-item";
//         Li.onclick = function () {
//             Li.classList.add("selected")
//         }
//         let iTag = document.createElement("i");
//         iTag.className = "fas fa-times";
//         iTag.onclick=function(){
//             this.parentNode.remove();
//         }
//         Li.append(iTag);
//         parentUl.append(Li);
//     }
//     input.value = "";
// })

// removeBtn.addEventListener("click", function () {
//     // parentUl.remove();
//     parentUl.innerHTML = "";
// })

// removeSelected.addEventListener("click", function () {
//     // let allSelected=document.getElementsByClassName("selected");
//     let allSelected = document.querySelectorAll(".selected");

//     for (const item of allSelected) {
//         item.remove();
//     }
// })

let list=document.getElementById("list");

// console.log(list.parentNode)