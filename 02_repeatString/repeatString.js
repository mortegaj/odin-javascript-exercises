const repeatString = function(text,reps) {
    let newText = "";

    if (reps < 0) return "ERROR";
    
    for (let i = 1; i <= reps; i++) {
        newText += text;
    }
    return newText
};

// Do not edit below this line
module.exports = repeatString;
