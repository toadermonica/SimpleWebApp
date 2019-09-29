class Validation {

    isValid(input) {
        if(input){
            const validInputRegExPattern = /^[a-zA-Z0-9]{0,10}$/gi;
            return validInputRegExPattern.test(input);
        }
    }

    isEmpty(obj) {
        for(let key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
}
const Validators = new Validation();
export default Validators;