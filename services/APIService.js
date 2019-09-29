import requestPromise from 'request-promise';

class APIService{

    async getCallResult() {
        const optionsPerson = {uri: 'http://localhost:3000/person/val0'};
        const optionsFacility = {uri: 'http://localhost:3000/person/val1'};
        const optionsExposure = {uri: 'http://localhost:3000/person/val2'};

        let result = await requestPromise(optionsPerson);
        result += await requestPromise(optionsFacility);
        result += await requestPromise(optionsExposure);
        return result;
    }

}

const serviceAPI = new APIService;
export default serviceAPI;