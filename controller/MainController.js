import MockData from "../data/MockData";

class Controller{

    // the calls to controller contain values: 1. some funky string i need to think of, for now it will be "other" - this returns val2 and val3
    // val1 which is key - this returns val3 and val4
    // val2 which is key again - this returns val5

    getValue(reqValueKey){
        //implement function that validates the response and then take it from there.
        let array = this.getMockDataValues();
        let result = this.findValue(reqValueKey, array);
        return result;
    }

    getMockDataValues(){
        let data = new MockData;
        let dataArray = data.getData();
        return dataArray;
    }

    findValue(key, array){
        for(let val of array){
            console.log('bool: ', key , ' ', val.key );
            if(key === val.key ){
                console.log('I am defined');
                let resultValue = val.value;
                return resultValue;
            }
        }
        return 'Nopsy';
    }

    validateRequest(){
        //TODO: validate the request set... either by regEx or something else, who knows :) then add in get value;
    }
}

const MainController = new Controller;
export default MainController;

/*
let result = '';
switch(inputValue){
    case 1:
        result = 1;
        break;
    case 2:
        result = 2;
        break;
    case 3:
        result = 3;
        break;
    case 4:
        result = 4;
        break;
    case 5:
        result = 5;
        break;
    default:
        result ='Unknown value';
        break;
}
return result;*/
