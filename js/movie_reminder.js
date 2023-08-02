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
    newMovie.push(new movie());
}