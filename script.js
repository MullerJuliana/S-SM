//slice()
  let orgWord = "Juliana"; // Original string to be sliced

  function slice(start, end, word) {
    let slicedString = ""; // empty string to build the sliced portion

    // If end is not provided, set it to the word's length
    if (end === undefined) {
      end = word.length;
    }

    // Loop through the word starting from `start` up to but not including `end`
    for (let i = 0; i < word.length; i++) {
      if (i >= start) { // Only add characters within the start to end range
        if (i < end) { // Only add characters within the start to end range
        slicedString += word[i];
      }
      }
    }
    return slicedString; // Return the sliced portion of the string
  }

  let newWord = slice(1, 5, orgWord); // Slices "Juliana" from index 1 to 5
  console.log("Before:", orgWord);    // Outputs: "Before: Juliana"
  console.log("After:", newWord);  // Outputs: "After: ulia"


//Replace()

  let newName = replace("n", "m", "juliana");

  let name = "Juliana"; // Original string to be modified

  function replace(oldLetter, newLetter, word) {
    let index = -1; // Initialize index to -1 (no replacement found yet)

    // Loop to find the first occurrence of oldLetter in the word
    for (let i = 0; i < word.length; i++) { // Check if current character matches oldLetter
      if (word[i] === oldLetter){
        index = i;  // Update index to the current position
      }
    }

    let newString = ""; // Initialize an empty string to build the modified version

     // Loop through each character/letter in the original word
    for (let i = 0; i < word.length; i++) {
      if (i === index){ // Check if the current position matches the replacement index
        newString += newLetter; // If so, add the new letter to newString "m"
      } else{
        newString += word[i]; // Otherwise, add the original character
      }
    }
    return newString;
  }

  console.log("Before:", name);      // Outputs: "Before: Juliana"
  console.log("After:", newName);     // Outputs: "After: Juliama"


//replaceAll()

  string = "pizza" // Original string to be modified

  //Calls replaceAll to replace "z" with "l" in the original string
  function replaceAll(oldChar, newChar, string){ 

   // Create a new empty array to hold the concatenated values
    let newString = "";   

    // Loop through each character in the original string
    for (let i = 0; i < string.length; i++){
       // Check if the current character matches the old character
      if (string[i] === oldChar){
        newString += newChar; // If it matches, add the replacement character `mew` to `newString`
      }
      else{
      newString += string[i]; //If it doesn't match, add the original character to `newString`
      }
    }
    console.log("Before:", string);
    console.log("After:", newString);
    return newString;
  }
  string = replaceAll("z", "l", string)


//concat()

  let word1 = "I like";
  let word2 = " Cats";

  // Define a function named 'concat' that takes one parameter 'array'
  function concat(array){
    // Create a new empty array to hold the concatenated values
    let newStr = [];
    let indexLeftOff = 0;
    //keeps track of what words we stopped at/Keeps track of where to start adding elements from 'array'

    // Loop through the 'nums' array and copy its elements to 'newNums'
    for (let i = 0; i < word1.length; i++){
      newStr[i] = word1[i]; // Copy each element from 'word1' to 'word2'
      indexLeftOff = i + 1  // Update indexLeftOff to the next position
    }
  // 1,2,3,4 will be placed in the empty array

    // Loop through the 'array' (which is 'otherNums') and add its elements to 'newNums'
    for (let i = 0; i < array.length; i++){
      newStr[indexLeftOff] = array[i]; // Place each element from 'array' into 'newNums'
      indexLeftOff++; // Move to the next index             
    }

    // Assign the concatenated result back to 'nums'
    word1 = newStr;
    
    console.log(word1);
  }
  // Call the function 'concat' with 'otherNums' as the argument
  concat(word2);
  

//charAt()

  let string2 = "cool word"; // Original string

  function charAt(index, word) {
    let character = ""; // Initialize an empty string to store the character if found

    // Loop through each character in the string
    for (let i = 0; i < word.length; i++) {
      if (i === index) { // Check if the current index matches the given index
        character = word[i]; // Assign the character at this position to `character`
        break; // Exit the loop once the character is found
      }
    }

    return character; // Return the character found at the specified index
  }

  let char = charAt(3, string2); // Retrieves the character at index 3 in "Juliana"
  console.log("String:", string2);  // Outputs: "cool word"
  console.log("Character at index 3:", char); // Outputs: "l"
