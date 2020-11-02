import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  errordata: {};

  constructor(private http: HttpClient) { }

  redirectUrl: string;

  login(email: string, dashboard_id: string, password: string)
  {
    return this.http.get('https://api.demo.reja.ai/auth?email=' + email + '&dashboard_id=' + dashboard_id + '&password=' + password).pipe(map(user => {
      if (user)
      {
        localStorage.setItem('currentUser', JSON.stringify(user))
      }
    }))
  }

  isLoggedIn()
  {
    if (localStorage.getItem('currentUser'))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  logOut()
  {
    localStorage.removeItem('currentUser');
  }
}
