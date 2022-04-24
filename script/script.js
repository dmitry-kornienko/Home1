"use srtict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрео довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGeners: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимы жанр под номером ${i}`);
            if (genre === ''  || genre == null) {
                 console.log(`Вы ввели некорректные данные или не ввели их вовсе`);
                 i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
















// // 2й способ
// while (personalMovieDB.count < 10) {
//     console.log("Просмотрео довольно мало фильмов");
// }
// while (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// }
// while (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// }
// // Как описать последний случай?
// // else {
// //     console.log("Произошла ошибка");
// // }


// // 3й способ
// do {
//     console.log("Просмотрео довольно мало фильмов");
// }
// while (personalMovieDB.count < 10);
// do {
//     console.log("Вы классический зритель");
// }
// while (personalMovieDB.count >= 10 && personalMovieDB.count < 30);
// do {
//     console.log("Вы киноман");
// }
// while (personalMovieDB.count >= 30);
// // Такой же вопрос, как и в предыдущем способе
// // do {
// //     console.log("Произошла ошибка");
// // }
// // while ()



// console.log(personalMovieDB);