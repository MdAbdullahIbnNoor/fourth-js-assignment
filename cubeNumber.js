function cubeNumber(numbers) {
    if(typeof numbers == 'number'){
        let result = Math.pow(numbers, 3);
        return result;
    }
    else{
        console.log("Please give the correct input..");
    }
}

const numbers = '4';
const output = cubeNumber(numbers);
console.log(output);