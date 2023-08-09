function sortMaker(arr) {
    if(arr[0] >= 0 && arr[1] >= 0){
        if(arr[0] < arr[1]){
            const temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
            return arr;
        }

        else if(arr[0] === arr[1]){
            return 'equal'
        }
    }

    else{
        return 'Invalid Input';
    }
}

const array = [0, 1];
let arraySorted = sortMaker(array);
console.log(arraySorted);