const number0Films = +prompt(`Сколько фильмов вы уже сиотрели  ?`,``) ; 
const personalMoviesDB = {
      count : number0Films, 
      movies : {}, 
      actors : {}, 
      genres : [],
      privat : false 

}; 
const a =prompt(`Один из последних просметренных фильмов ? `, ``),
      b = prompt(`На сколько оцените его ? `, ``), 
      c =prompt(`Один из последних просметренных фильмов ? `, ``),
      d = prompt(`На сколько оцените его ? `, ``);
      personalMoviesDB.movies[a]  =b; 
      personalMoviesDB.movies[c] =d ;
      document.write(personalMoviesDB); 