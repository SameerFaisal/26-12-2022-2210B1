// function show(){
//     let n1=document.querySelector("#num1").value
//     let n2=document.getElementById("num2").value
//    let result=parseFloat(n1)+parseFloat(n2)
//    alert(result)
   
// }
//Calculator Logic
// function add(){
//     let n1=document.querySelector("#num1").value
//     let n2=document.getElementById("num2").value
//     let result=parseFloat(n1)+parseFloat(n2)
//    let output=document.getElementById("output")
//    output.innerHTML=result
//    output.style.color="crimson"
// }
// function sub(){
//     let n1=document.querySelector("#num1").value
//     let n2=document.getElementById("num2").value
//     let result=parseFloat(n1)-parseFloat(n2)
//     document.getElementById("output").innerHTML=result
// }
// function mul(){
//     let n1=document.querySelector("#num1").value
//     let n2=document.getElementById("num2").value
//     let result=parseFloat(n1)*parseFloat(n2)
//     document.getElementById("output").innerHTML=result
// }
// function div(){
//     let n1=document.querySelector("#num1").value
//     let n2=document.getElementById("num2").value
//     let result=parseFloat(n1)/parseFloat(n2)
//     document.getElementById("output").innerHTML=result
// }

// function change(){
// document.getElementById("img").src="./download (1).jfif"
// }
// function reverse(){
//     document.getElementById("img").src="./download.jfif"
// }

// function style(){
//     document.querySelector(".para")

// }

// function count(){
//     var liElements = getElementsByTagName("li");
// var howManyLi = liElements.length;
//     for (var i = 0; i < howManyLi; i++) {
//         if (liElements[i].innerHTML === "") {
//         liElements[i].innerHTML = "coming soon";
//         }
//     }
// }

const webFrameworks = ["React" , "Angular" , "Rails" ,"Node.js"];
let text = "";
for (let x of webFrameworks) {
text += x;
}
console.log(text);