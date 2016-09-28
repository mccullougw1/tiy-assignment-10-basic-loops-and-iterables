////------------------------------------------------------------------
// TASK 1 : Build a function that returns an array of strings with last names added:
//    If less than 6 characters, append Sampson: e.g. "Homer Sampson"
//    If 6 characters or longer, append Simpson: 'Jessica Simpson'
////------------------------------------------------------------------
//input: array of strings
//output: array of strings
var simpList = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]
var modifiedNamesList = []

var simpOrSamp = function(arg1) {
   var simp = ' Simpson'
   var samp = ' Sampson'

   for (var i = 0; i < arg1.length; i++) {
      if (arg1[i].length < 6) {
         arg1[i] = arg1[i] + samp
         modifiedNamesList.push(arg1[i])
      } else {
         arg1[i] = arg1[i] + simp
         modifiedNamesList.push(arg1[i])
      }
   }
   return modifiedNamesList
}

var modifiedNamesList = simpOrSamp(simpList)
console.assert( modifiedNamesList[1] === "OJ Sampson" )
console.assert( modifiedNamesList[2] === "Marge Sampson" )
console.assert( modifiedNamesList[5] === "Maggie Simpson" )


////------------------------------------------------------------------
// TASK 2 : Write a function called shortiesOnly(). It should as input an array of strings, and
//    it should return a new array containing only those strings with four or fewer characters.
////------------------------------------------------------------------

var allNames = [
    "Ed",
    "Tom",
    "Elfrid",
    "Sam",
    "Bartholomeu",
    "Wayne",
    "Theodore",
    "Ingrid",
    "Fred",
    "Yvette"
]

var shortiesOnly = function(arrInput) {
   var sizeDoesMatter = []

   for (var i = 0; i < arrInput.length; i++) {
      if (arrInput[i].length <= 4) {
         sizeDoesMatter.push(arrInput[i])
      }
   }
   return sizeDoesMatter
}


var shortList = shortiesOnly(allNames)
console.assert( shortList.length === 4 )
// checks to see that FRED is INCUDED in the array.
console.assert( shortList.indexOf('Fred') != -1 )
// checks to see that WAYNE is NOT in the array.
console.assert( shortList.indexOf('Wayne') === -1 )
