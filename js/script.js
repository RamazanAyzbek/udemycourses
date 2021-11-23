`use strict`; 
let  number0Films; 
function start(){
    number0Films = +prompt(`Сколько фильмов вы уже смотрели ? `, ``);
    while(number0Films==`` || number0Films==null || isNan(number0Films)){
      number0Films = +prompt(`Сколько фильмов вы уже смотрели ? `, ``);
    }
}
start();
const personalMovieDB = {
    count : number0Films, 
    movies: {}, 
    actors: {}, 
    genres : [],
    privat: false  

}; 

function rememberMyfilms(){
      for(let i=0; i<2; i++) {
            const  a = prompt(`Один из последних просмотренных фильмов`, ``), 
             b = prompt(`На сколько оцените его ? `, ``); 
             if(a!=null && b!=null && a!=`` && b!=`` && a.length<50)
             {
                personalMovieDB.movies[a] =b;
                console.log(`done`) ; 
             }
             else  {
                   console.log(`error`); 
                   --i; 
             }
        
        
        }
}
function detectPersonalLevel(){
      if(personalMovieDB.count<10) {
            console.log(`Просмотрено довольно мало фильмов`); 
      
      } else if(personalMovieDB.count>10 && personalMovieDB.count<30)
      {
          console.log(`Вы классический зритель `); 
      } else if(personalMovieDB.count>=30)
      {
            console.log(`Вы просто киноман`); 
      }else { 
            console.log(`Произошло ошибка`); 
      }
}

detectPersonalLevel();
function showMyDB(hidden){
if(!hidden){
console.log(personalMovieDB)
}
}
showMyDB(personalMovieDB.privat)
function writeYourGenres(){
      for(let i=1; i<3; i++){
            const genre = prompt(`Ваш любимый жанр по номерам ${i}`);
            personalMovieDB.genres[i-1] = genre; 
      }
}
writeYourGenres(); 
