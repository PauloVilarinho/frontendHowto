import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {



  constructor(private http: HttpClient) { }

  public login(user): Observable<any> {
    const uri = `${environment.ApiRoot}/login`;
    const response = this.http.post(uri, user);
    response.subscribe(data => {
      const currentUser = {
        username: user.username,
        ... data
      };
      localStorage.setItem('currentUser', JSON.stringify(currentUser) );
    });
    return response;
  }

  public loggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}
