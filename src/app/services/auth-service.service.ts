import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private logger = new BehaviorSubject<boolean>(false);
  private logged: boolean;

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
      this.logged = true;
      this.logger.next(this.logged);
    });
    return response;
  }

  public getCurrentUser() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return user ? user.username : 'none';
  }

  public logOut(): void {
    localStorage.removeItem('currentUser');
    this.logged = false;
    this.logger.next(this.logged);
  }

  public loggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }
}
