import { Injectable } from '@angular/core';

import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ApiError } from '../../models/interfaces/api-error.model';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(

      catchError((error: HttpErrorResponse) => {

        if (error.error) {

          // Validation Errors (400)
          if (error.status === 400) {

            console.error('Validation Error:', error.error);

          }

          // API Errors
          else {

            const apiError = error.error as ApiError;

            console.error(
              `${apiError.status} - ${apiError.message}`
            );

          }

        }

        return throwError(() => error);

      })

    );

  }

}