const removeFromArray = function(myArray, ...values) {
    for (value of values) {
        let index = myArray.indexOf(value);             
        while (index != -1) {            
            myArray.splice(index,1);
            index = myArray.indexOf(value);
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
