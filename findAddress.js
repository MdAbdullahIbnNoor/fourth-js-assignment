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


const obj = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
};

const address = findAddress(obj);
console.log(address);
