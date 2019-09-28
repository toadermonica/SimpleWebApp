
class Validation {

    constructor(){
        this.isInvalid();
    }

    isInvalid(input) {
        let regExPattern = /[^a-zA-Z0-9]|[\s]/gi;
        let isInvalidInput = regExPattern.test(input);
        return isInvalidInput;
    }
}
const Validators = new Validation;
export default Validators;