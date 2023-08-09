icon = document.querySelector("i.navOpen");

icon.addEventListener("click", myFunction);
function myFunction(){
    nav = document.querySelector("nav").classList;
    
    if (nav[0] === 'close'){
        document.querySelector("nav").classList.replace("close","open");
        document.querySelector("body div").classList.replace("close","open");
        
        for (a of document.querySelectorAll("nav a")){
            a.classList.replace("inVisiable","visiable");
        }
        
    }
    else{
        document.querySelector("nav").classList.replace("open","close");
        document.querySelector("body div").classList.replace("open","close");
        for (a of document.querySelectorAll("nav a")){
            a.classList.replace("visiable","inVisiable");
        }
        document.querySelector("nav a").classList.replace("inVisiable","visiable");
    }

}