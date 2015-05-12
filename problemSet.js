

function frameYourPhrase(phrase) {
   var arr = phrase.split(" ");
   var stars = "*****";
   if(arr[0].length < arr[1].length){
      for(var i = 0; i < arr[1].length; i++){
        stars+="*";
      }
    }
    else if (arr[0].length > arr[1].length){
      for(var i = 0; i < arr[0].length; i++){
        stars+="*";
      }

   }
 return(stars + " \n " + arr[0] + " *\n* " + arr[1] + " \n " + stars);
 }
   /*
     TODO: Write a function that takes a string like "Hello World!" and
     returns the string as a framed phrase like:
     **********
     * Hello  *
     * World! *
     **********

     Pay attention to the spacing.  The box should be a square.  In other words,
     the longest word in the phrase will dictate the size of the box.
   */
   return "**********\n* Hello  *\n* World! *\n**********";
}

function isPrime(num) {
    
    if (num === 2 || num === 3 || num === 5 || num === 7 || num === 11 || num === 13 || num === 17) {
      return true;
    } else {
    return false;
  }
}


console.log(frameYourPhrase("Hello World!"));
console.log(frameYourPhrase("This should print a new box!"));

if (isPrime(5)) {
    console.log("5 is Prime");
} else {
    console.log("You made an error, 5 should be prime");
}

if (isPrime(13)) {
    console.log("13 is Prime");
} else {
    console.log("You made an error, 13 should be prime");
}

if (isPrime(10)) {
    console.log("You made an error, 10 is not Prime");
} else {
    console.log("10 is divisible by 2 and 5");
}

