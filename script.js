


//console.log("Connected");

 

//ToDos

//accented characters

//add new words

 

//Working object dictionary

let dict = [

  {

    "word": "arbol",

    "english": "tree",

    "spanish": "arbol",

    "br": "krang",

    "pos": "noun",

    "origin": "bruncjacj"

  },

  {

    "word": "hambre",

    "english": "hunger",

    "spanish": "hambre",

    "br": "bri",

    "pos": "noun",

    "origin": "bruncjacj"

  },

  {

    "word": "fruta",

    "english": "fruit",

    "spanish": "fruta",

    "br": "hua",

    "pos": "noun",

    "origin": "bruncjacj"

  }

];

 

//search()

function search() {

  //This asks for the word one is looking for and assigns it to a variable 

  let toSearch = document.getElementById("search").value;

  //This allows insensitive search

  toSearch = toSearch.toLowerCase();

 

  //this add keyup event

  // input.addEventListener("keyup", function (event) {

  //   if (event.keyCode === 13) {

  //     event.preventDefault();

  //     document.getElementById("searchBtn").click();

  //   }

  // });

 

  //This sets the "searched" word in the HTML document

  document.getElementById("search_word").innerHTML = toSearch;

 

  //this sets the value of found as a start

  var found = false;

 

  //These sets the variable for DOM modification

  var pos;

  var origin;

  var result_brun;

  var result_spanish;

  var result_english;

 

  //This is the loop to parse through the dict object

  for (let i = 0; i < dict.length; i++) {

    for (key in dict[i]) {

      if (dict[i][key].indexOf(toSearch) != -1) {

        found = true

 

        //This displays the word in the HTML document, by assigning a new value to the variables for DOM Manipulation

        pos = (dict[i]["pos"]);

        origin = (dict[i]["origin"]);

        result_brun = (dict[i]["br"]);

        result_spanish = (dict[i]["spanish"]);

        result_english = (dict[i]["english"]);

        //this break out of the loop

        break;

      }

      //this sets new values to the DOM variables if values are not found

      else {

        pos = "Not found!";

        origin = "Not found!";

        result_brun = "Not found!";

        result_spanish = "Not found!";

        result_english = "Not found!";

      }

    }

    //if the word is found, set the value of found to true and exit the loop 

    if (found == true) {

      break;

    }

  }

 

  //one the value has been found update the DOM in the document

  document.getElementById("pos").innerHTML = pos;

  document.getElementById("origin").innerHTML = origin;

  document.getElementById("result_brun").innerHTML = result_brun;

  document.getElementById("result_spanish").innerHTML = result_spanish;

  document.getElementById("result_english").innerHTML = result_english;

 

  //defines notfound

  let notFound;

 

  //print a NOT FOUND message

  if (found == false) {

    //if word is not found assign value to notFound

    notFound = " does not exist";

    //this updates the DOM if notFound is true

    document.getElementById("not_found").innerHTML = "Word " + toSearch + notFound;

 

  }

 

}

 

//add()

 

//this code is to be used if we wish to print a msg when the word is found

// else {

//   //it changes the notFound value

//   notFound = " DOES exist."

// }