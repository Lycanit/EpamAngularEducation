import { ErrorHandler } from '@angular/core/index';


export class GlobalErrorHandler implements ErrorHandler {
    handleError(error) {
        if (error.originalError instanceof EvalError) {
            console.log(error);
        }

    }
}
