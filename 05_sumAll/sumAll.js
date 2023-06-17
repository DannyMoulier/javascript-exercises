// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const sumAll = function(num1, num2) {
    let arrayOfNums = [];
    let finalSum = 0;
    for (let num = num1; num < num2; num++) {
        arrayOfNums.push(num)
    }
    arrayOfNums.push(num2)

    for (let num in arrayOfNums) {
        finalSum += num
    }
    
    return finalSum
    
};


result = sumAll(1, 4);

console.log(result)
