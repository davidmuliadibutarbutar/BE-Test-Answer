/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function result(data) {
  // Your Code Here
  for(var i=0; i<data.length; i++){
    for(var j=0; j<i; j++){
      if(data[j].classes[j].class_name === undefined){
        delete data[j].classes[j].class_name;
      }
    }
    if(data[i].session_name === null){
      delete data[i].session_name;
    }
  }
  //delete data[1].session_name;
  //delete data[0].classes[0].class_name;
  return data;
}

console.dir(result(data),{depth:null});
