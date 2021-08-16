
/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let test = "Hola"
console.log("Ex. A:")
console.log(test)

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

let sum = 10 + 20
console.log("Ex. B:")
console.log(sum)

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.floor(Math.random() * 10);
console.log("Ex. C:")
console.log(random)

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {Name: "John", Surname: "Blox", Age: 32};
console.log("Ex. D:")
console.log(me)

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.Age;
console.log("Ex. E:")
console.log(me)

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

me.Skills = ["HTML", "CSS", "Python", "JavaScript"]
console.log("Ex. F:")
console.log(me)

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

me.Skills.pop()
console.log("Ex. G:")
console.log(me)

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

let diceNumbers = Math.floor(Math.random() * 6) + 1;

function dice() {
    return diceNumbers;
}
console.log("Ex. 1:")
console.log(dice());

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

function whoIsBigger(a,b) {
    if (a > b)
    return a
    else
    return b
}
console.log("Ex. 2:")
console.log(whoIsBigger(2,4))

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

function splitMe(c) {
    return c.split(" ");
}

console.log("Ex. 3:")
console.log(splitMe("Me gusta Strive"))

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. 
    If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

let bye = "Adios"
let truth = false

function deleteOne(str, bool) {
    if (bool)
    return str.substring(1)
    else
    return str.slice(0, -1)
}
console.log("Ex. 4:")
console.log(deleteOne(bye, truth));

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

function onlyLetters(d) {
    let withoutNumbers = d.replace(/[0-9]/g, '')
    return withoutNumbers
}

console.log("Ex. 5:")
console.log(onlyLetters("Tengo 4 perros"))

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true 
   if the string is a valid email address.
*/

function isThisAnEmail(e) {
    let f = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return f.test(String(e).toLowerCase());
}

console.log("Ex. 6:")
console.log(isThisAnEmail("johnblox5@gmail.com"))

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

function whatDayIsIt () {
    let d = new Date();
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let today = weekday[d.getDay()];
    return today;
}

console.log("Ex. 7:")
console.log(whatDayIsIt());

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

console.log("Ex. 8: Unfinished")

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter
   and should return the number of days passed since that date.
*/

let today = new Date();
let dateToday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

function howManyDays(d) {
  let day1 = new Date(d);
  let day2 = new Date(dateToday);
  let difference = Math.abs(day2-day1);
  days = difference/(1000 * 3600 * 24)
  return days;
}
console.log("Ex.9:")
console.log(howManyDays("2021-8-12"))

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

function isTodayMyBirthday(cake) {
  if (cake === dateToday)
  return true;
  else
  return false;
}

console.log("Ex. 10:")
console.log(isTodayMyBirthday("1989-5-22"))

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, 
   and returns the given object after deleting its property named as the given string.
*/

let info = {
  name: "john",
  age: 32
}

function deleteProp(obj,str) {
  delete obj.name;
  return obj;
}
console.log("Ex. 11:")
console.log(deleteProp(info, "john"))

//I MOVED THE MOVIES ARRAY TO HERE:

/* This movies array is used throughout the exercises. Please don't change it :)  
*/

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

function olderMovie(arr) {
  let movieYears = arr.map((x => x.Year))
  let oldest = Math.min(...movieYears)
  return oldest;
}

console.log("Ex. 12:")
console.log(olderMovie(movies))

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

function countMovies(h) {
  return h.length;
}
console.log("Ex. 13:")
console.log(countMovies(movies))

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies 
    provided in the array at the end of the file.
*/

function onlyTheTitles(arr) {
  let movieTitle = arr.map((x => x.Title))
  return movieTitle;
}
console.log("Ex. 14:")
console.log(onlyTheTitles(movies))

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

function onlyInThisMillennium(arr) {
  let movieYears = arr.map((x => x.Year))
  let thisMil = movieYears.filter(x => x > 2000)
  return thisMil;
}
console.log("Ex. 15:")
console.log(onlyInThisMillennium(movies))

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

function getMovieByID(id) {
  let index = movies.findIndex(x => x.imdbID === id);
  let movieInfo = movies[index];
  return movieInfo;
}
console.log("Ex. 16:")
console.log(getMovieByID("tt0167260"))

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

let movieYears = movies.map((x => x.Year));
let movieYearsInt = movieYears.map(function (x) { 
  return parseInt(x, 10); 
});
function sumAllTheYears(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log("Ex.17:")
console.log(sumAllTheYears(movieYearsInt))

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter 
    and returns all the movies which contain that string in the title.
*/

console.log("Ex. 18: Unfinished")

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

console.log("Ex. 19: Unfinished")

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and 
   returns the movies array without the element in the given position.
*/

function removeIndex(int) {
  delete movies[int];
  return movies;
}

console.log("Ex. 20:")
console.log(removeIndex(2))


