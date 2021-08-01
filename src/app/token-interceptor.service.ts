import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  // tslint:disable-next-line: typedef
  intercept(req, next) {
    // tslint:disable-next-line: prefer-const
    let authService = this.injector.get(AuthService);
    const tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + authService.etToken())
      }
    );
    return next.handle(tokenizedReq);
  }
}
