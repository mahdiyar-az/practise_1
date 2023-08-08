class movie{
    constructor(name, imdb, link, is_film){
        this.name = name;
        this.imdb = imdb;
        this.link = link;
        this.is_film = is_film;
    }

    getName() {
        return this.name;
    }
    getImdb(){
        return this.imdb
    }
    getLink() {
        return this.link;
    }
  
}
newMovie = []
function addMovie (){
    console.log("test");
    a= document.querySelectorAll("input");
    const name = a[0];
    const imdb = a[1];
    const link = a[2];
    console.log(name.value);
    b = new movie(name.value,imdb.value,link.value);
    newMovie.push(b);
    movies();
}

function movies(){
    
    let textfull = "";
    for (let c of newMovie){
        textfull = textfull + `<li class:"list"><div>${c.getName()} </div> <div> ${c.getLink()} </div> <div>${c.getImdb()}</div></li>`;
    }
    document.querySelector("ul.movies").innerHTML = textfull;
}
