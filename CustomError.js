export default class CustomError extends Error {
    constructor (messege,statusCode,errorCode){
        super(messege);
        this.status=statusCode;
        this.error=errorCode;
    }
}