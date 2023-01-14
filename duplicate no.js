const arr = [1,2,3,4,5,6,11,8,8,10];
const findDupes = (arr) => {
  const observed = {};
  for(let i = 0; i < arr.length; i++) {
    if(observed[arr[i]]) {
      return arr[i]
    } else {
      observed[arr[i]] = arr[i];
    }
  }
  
  return false;
}
console.log(findDupes(arr)); 