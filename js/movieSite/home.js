const test = document.querySelector("button.testing");
console.log(test);
test.addEventListener("click",myfunc);
function myfunc(){
    alert("test");
}