import { AppError } from './app-error';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class ErrorUtil {
  public static handleError(error: HttpErrorResponse) {
    console.log('handleError');
    let errorMessage = '';
    console.log(error);
    if (error.status === 0) {
      console.error('client');
      errorMessage =
        error instanceof AppError
          ? error.message
          : 'Problem in client side';
    } else {
      console.error('servidor');
      errorMessage = ErrorUtil.getServerErrorMessage(error);
    }
    return throwError(new Error(errorMessage));
  }

  private static getServerErrorMessage(error: HttpErrorResponse) {
    switch (error.status) {
      case 404: {
        return `Resource not found!`;
      }
      case 403: {
        return `Access forbidden!`;
      }
      case 500: {
        return `An error happened!`;
      }
      default: {
        return `An error happened, try again later!`;
      }
    }
  }
}
