class MockData{
    constructor(){
        this.getData();
    }
    getData(){
        let array = [{ key: 'val1', value: 1 },
            { key: 'val2', value: 2 },
            { key: 'val3', value: 3 },
            { key: 'val4', value: 4 },
            { key: 'val5', value: 5 }];
        return array;
    }
}

export default MockData;
