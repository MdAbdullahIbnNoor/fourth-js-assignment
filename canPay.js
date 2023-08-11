function canPay(changeArray, totalDue) {
    if (changeArray.length !== 0 || totalDue != undefined) {
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

let notes = [2,4,6];
let price = 20;
let result = canPay(notes, price);
console.log(result);