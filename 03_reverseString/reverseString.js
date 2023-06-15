const reverseString = function(text) {
    let stringArray = text.split('');
    newString = stringArray.reverse();
    return newString.join('');
};

// Do not edit below this line
module.exports = reverseString;
