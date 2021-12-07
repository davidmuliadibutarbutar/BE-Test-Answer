/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  const temp = numbers.filter((a,b) => numbers.indexOf(a) == b).sort()

  for(i=0; i<numbers.length; i++){
    var a = temp[i];
    var b = temp[i+1];
    if(b - a != 1){
      return i+1;
    }
  }
}

console.log(result(numbers));
