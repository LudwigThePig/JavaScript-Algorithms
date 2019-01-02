/*
**********************************************
Extra-easy algorithms from freeCodeCamp
    fast easy reps to solidify the foundations
**********************************************
*/


/*
Directions:
    Find sum of all numbers in the range arr[0], arr[1]
*/
function sumAll(arr) {
    let acc = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++){
      acc += i;
    }
    return acc;
  }
sumAll([1, 4]);

/*
Directions:
    Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

APPROACH:
  Concat the the two arrays
    use filter to test if an item is not in arr1 OR arr2
        filter will remove items that are is arr1 or arr2
  Chain those methods together and return

*/
function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));  
  }  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/*
Directions:
    You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
Approach:
  Create an array of the seeker arguments.
  filter the arr for items that are not in that args

  ***********REVIST AND REFRESH PLEASE***********
*/
function destroyer(arr) {
    let args = Array.prototype.slice.call(arguments, 1);
    return arr.filter(item => !args.includes(item));
  }
destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/*
Directions:
    Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
Approach:
  Get keys for source
  Start with a filter
    Within that filter, we assign a bool that indicates a match.
    Then reduce all the bools to one bool that passes through the filter
*/
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line

    var srcKeys = Object.keys(source);

    arr = collection
        .filter(item => srcKeys
        .map(key => item.hasOwnProperty(key) && item[key] === source[key])
        .reduce((acc, cur) => acc && cur));

    // Only change code above this line
    return arr;
  }
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })




/*
Directions:
  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Approach:
    Create a regex that captures spaces, underscores, and the character before a capital letter.
    Split with regex, join with dashes, toLowerCase
                Note: I came up with the solution but googled around for the space-before-capital bit
*/
function spinalCase(str) {
    const regex = /\s|_|(?=[A-Z])/;
    return str.split(regex).join('-').toLowerCase();
  }
spinalCase('This Is Spinal Tap');




/*
Directions: Translate to Pig Latin!
    Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
    If a word begins with a vowel you just add "way" to the end.
Approach:
  Declare string to return, pigLatin
  Check if the first letter is a vowel. If true, pig latin will equal the virgin string + 'way'
  Check if there are no vowels. If true, pigLatin will equal virgin + 'ay'
  If not, we need to find out how many consonants are at the begining of string OR find the index of the first vowel!

*/
function translatePigLatin(str) {
    let pigLatin;
    if (str[0].match(/[aeiou]/)){
      pigLatin = str + 'way';
    } else if (!str.match(/[aeiou]/)) {
      pigLatin = str + 'ay';
    } else {
      let firstVowel = str.indexOf(str.match(/[aeiou]/));
      pigLatin = str.slice(firstVowel) + str.slice(0, firstVowel) + 'ay';
    }
    return pigLatin
    }
  
  translatePigLatin("cry");
translatePigLatin("consonant");



/*
Directions:
    Replicate .map() with a for loop or .forEach()
*/
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];

  for (let i = 0; i<this.length; i++){
    newArray.push(callback(this[i]));
  }
  return newArray;
};




/*
Directions:
    Replicate .filter() with a for loop or .forEach()
*/
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  for (let i = 0; i < this.length; i++){
    if (callback(this[i])){
      newArray.push(this[i]);
    }
  }
  return newArray;
};



/*
Directions:
    Find the average imdbRating of Christopher Nolan's movies
Approach:
    USING REDUCE
*/
var watchList = [
    {  
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
   },
   {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
   },
   {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
   }
];

var averageRating = watchList
.filter(movie => movie.Director === "Christopher Nolan")
.map( x => Number(x.imdbRating))
.reduce( (acc, cur)=> (acc + cur))  / watchList.filter(movie => movie.Director === "Christopher Nolan").length;

console.log(averageRating); //logs 8.675 or something