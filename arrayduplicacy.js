function getUnique(arr){
    
    let uniqueArr = [];
    
    
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [10,20,123,12,12,12,12,10,11,20,20,123];


getUnique(array);