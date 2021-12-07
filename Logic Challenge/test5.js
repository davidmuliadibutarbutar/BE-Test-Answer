/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  // Your Code Here
  if (!words[0] || words.length ==  1){
    return words[0] || "";
  }
  let i = 0;
  while(words[0][i] && words.every(w => w[i] === words[0][i]))
    i++;
  return words[0].substr(0, i);
}

console.log(result(words));
