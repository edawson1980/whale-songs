let input = 'pizza party'; //this is the phrase for translation

const vowels = ['a', 'e', 'i', 'o', 'u']; //these are the vowels to be used in translation

let resultArray = [];

for(let i = 0; i < input.length; i++){ //this loop runs through each character in input
  for(let v = 0; v < vowels.length; v++){ //this loops runs through vowels array each time the input loop runs
    if(input[i] === vowels[v]){ //to access a certain letter in a string, cite it like an array
      resultArray.push(vowels[v]); //add any vowels in input to the results array
    }
  }
  /*scientifically, whales double Es and Us, so
  now we have to recheck for Es and Us.  The first (inner) loop just throws
  all the vowels into the results array, and now we go through input again to find Es and Us again.
  because doubling.*/
  if(input[i] === 'e'){
    resultArray.push(input[i]);
  }
  //now check for Us
  if(input[i] === 'u'){
    resultArray.push(input[i]);
  }
};

let prettyResult = resultArray.join(" ");
let finalTranslation = prettyResult.toUpperCase(); //has to be in this order, b/c toUpperCase only works on strings
console.log(finalTranslation);
