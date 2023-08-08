function matchFinder(string1, string2) {
    if(typeof string1 === 'string' && typeof string2 === 'string'){
        let result = string1.includes(string2);
        return result;
    }

    else{
        console.log("The input given is invalid, Please give the correct one..");
    }
}


// const output = matchFinder("John Doe", "ohn");
const output = matchFinder("JavaScript", "Code");
console.log(output);