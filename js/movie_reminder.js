class movie{
    constructor(name, imdb, link, is_film){
        this.name = name;
        this.imdb = imdb;
        this.link = link;
        this.is_film = is_film;
    }
}
newMovie = []
function addMovie (){
    console.log("test");
    a= document.querySelectorAll("input");
    const name = console.log(a[0]);
    const imdb = console.log(a[1]);
    const link = console.log(a[2]);
    console.log(name.value);
    b = new movie(name[value]);
    newMovie.push(b);
}

function test(){
    
}

