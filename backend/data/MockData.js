class MockData{

    constructor(){
        this.dataArray();
    }

    dataArray(){
        const array = [{key:"val0", value: {"val1": "" ,"val2": "" }},
            {key:"val1", value:{"val3": "","val4": "" }},
            {key:"val2", value:{"val5": "" }}];
        return array;
    }
}

export default MockData;
