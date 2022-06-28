class sweuyghurError extends Error{}

class InvalidCredentials  extends sweuyghurError {
    constructor (){
        super();
        this.message = 'Invalid Credentials!!!';
        this.errorCode = 403;
    }
}
class Unauthorized  extends sweuyghurError {
    constructor (){
        super();
        this.message = 'Unauthorized!!!';
        this.errorCode = 401;
    }
}
class Forbidden  extends sweuyghurError {
    constructor (){
        super();
        this.message = 'Forbidden!!!';
        this.errorCode = 403;
    }
}
class TokenExpired  extends sweuyghurError {
    constructor (){
        super();
        this.message = 'TokenExpired!!! Please Login Again!!!';
        this.errorCode = 401;
    }
}
class TaskNotFound  extends sweuyghurError {
    constructor (){
        super();
        this.message = 'Task with data provided not found!!!';
        this.errorCode = 404;
    }
}


module.exports = { sweuyghurError, InvalidCredentials, Unauthorized, Forbidden, TokenExpired, TaskNotFound}
