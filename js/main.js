icon = document.querySelector("i.navOpen");

icon.addEventListener("click", myFunction);
function myFunction(){
    document.querySelector("nav").classList = "open";
    const Nnavbar = document.querySelector("body div").classList;
   
    console.log(Nnavbar);
}