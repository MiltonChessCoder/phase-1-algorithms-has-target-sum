function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0 ; i < array.length ; i ++ ){
    let valueToAdd = target - array[i];

    for(let x = i + 1 ; x < array.length; x ++ ){
      if(array[x] === valueToAdd) return true; 
    } 
  }
  return false ; 
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/
// loop through each element in array
// get the number that we should add to element to reach target
// create an inner loop that compares to each element in the array
// if any of them add up return true
// if we reach end of array return false  
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
