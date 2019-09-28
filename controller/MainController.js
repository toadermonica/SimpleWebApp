import MockData from "../data/MockData";
import Validation from "../helpers/Validators";

class Controller{

    //TODO: revise some of the functions in here
    //todo: handle errors.
    isAuthenticated(parameter){
        let isInvalid = Validation.isInvalid(parameter);
        if(!isInvalid){
            return this.getPersonEndpoint();
        }
        return 'Unauthorized user!';
    }

    getPersonEndpoint(){
        let data = MainController.getValue("val0");
        return data;
    }
    getFacilityEndpoint(parameter){
        let data = MainController.getValue(parameter);
        return data;
    }
    getExposureEndpoint(parameter){
        let data = MainController.getValue(parameter);
        return data;
    }

    getValue(reqValueKey){
        //implement function that validates the response and then take it from there.
        let array = this.getMockDataValues();
        let result = this.findValue(reqValueKey, array);
        return result;
    }

    findValue(reqValueKey, dataArray){
        for(let valDataArray of dataArray){
            if(reqValueKey == valDataArray.key){
                return valDataArray.value;
            }
        }
        return null;
    }
    getMockDataValues(){
        let data = new MockData;
        let dataArray = data.dataArray();
        return dataArray;
    }

}

const MainController = new Controller;
export default MainController;

