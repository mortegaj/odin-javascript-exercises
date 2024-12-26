const reverseString = function(text) {
    let reverserdText = "";
    let index = text.length - 1;
    while (index >= 0) {
        reverserdText = reverserdText + text[index];
        index = index - 1;
    }
    return reverserdText;
};

// Do not edit below this line
module.exports = reverseString;
