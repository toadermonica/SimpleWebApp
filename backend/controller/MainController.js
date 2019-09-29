import MockData from "../data/MockData";

class Controller{
    getEndpoint(reqValueKey){
        const data = new MockData;
        for(let valDataArray of data.dataArray()){
            if(reqValueKey == valDataArray.key){
                return valDataArray.value;
            }
        }
        return null;
    }
}

const MainController = new Controller();
export default MainController;

