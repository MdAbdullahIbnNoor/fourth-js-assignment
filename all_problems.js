function cubeNumber(numbers) {
    if(typeof numbers == 'number'){
        let result = Math.pow(numbers, 3);
        return result;
    }
    else{
        return "Please give the correct input..";
    }
}

function matchFinder(string1, string2) {
    if(typeof string1 === 'string' && typeof string2 === 'string'){
        let result = string1.includes(string2);
        return result;
    }

    else{
        return "The input given is invalid, Please give the correct one..";
    }
}

function sortMaker(arr) {
    if(arr[0] >= 0 && arr[1] >= 0){
        if(arr[0] < arr[1]){
            const temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
            return arr;
        }

        else if(arr[0] === arr[1]){
            return 'equal';
        }
    }

    else{
        return 'Invalid Input';
    }
}

function findAddress(obj) {
    let keyss = ['street', 'house', 'society'];
    let array = [];

    for(const i of keyss){
        if(obj[i] === undefined){
            array.push('__');
        }
        else{
            array.push(obj[i]);
        }
    }

    return array;
}

function canPay(changeArray, totalDue) {
    if (changeArray.length > 0) {
        let sum = 0;
        for (let i = 0; i < changeArray.length; i++) {
            sum += changeArray[i];
        }

        const due = sum - totalDue;
        if (due < 0) {
            return false;
        }
        else {
            return true;
        }
    }
    
    else{
        return 'The input is invalid';
    }
}