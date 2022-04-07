"use srtict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = prompt("На сколько оцените его?", "");


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");
    
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
}

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрео довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// 2й способ
while (personalMovieDB.count < 10) {
    console.log("Просмотрео довольно мало фильмов");
}
while (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
}
while (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
}
// Как описать последний случай?
// else {
//     console.log("Произошла ошибка");
// }


// 3й способ
do {
    console.log("Просмотрео довольно мало фильмов");
}
while (personalMovieDB.count < 10);
do {
    console.log("Вы классический зритель");
}
while (personalMovieDB.count >= 10 && personalMovieDB.count < 30);
do {
    console.log("Вы киноман");
}
while (personalMovieDB.count >= 30);
// Такой же вопрос, как и в предыдущем способе
// do {
//     console.log("Произошла ошибка");
// }
// while ()



console.log(personalMovieDB);