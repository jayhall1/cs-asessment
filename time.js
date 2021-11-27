// function getArray(){
//     let array = [];
//     for (let i=0; i<size; i++){
//         array.push(i);
//     }
//     return array
// }
// let nums = []
// for (let i = 0; i < someArray; i++ ) {
//     if i == 0 
// }
// function addZero(nums) {
//     return Boolean;
//     if 
// }

// for (let i = 0; i <Array.length; i++){

// }
function findSumPair(input, target) {
    for(let a = 0; a < input.length; a++) {
       for(let b = a; b < input.length; b++) {
          if(input[a]+input[b] === target)
             return true;
             
       }
     
    }
   return false 
 }
 console.log(findSumPair([3, 7, 9, 4, 8, -5, 12, 4, -9, 16, 5], 0));
// #2

function unique(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
      var ch = str[i];
      if (obj[ch]) return false;
      obj[ch] = true;
    }
    return true;
}

// #3
function Pangram(string){
    let strArray = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArray.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
}

function LongestWord(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
}