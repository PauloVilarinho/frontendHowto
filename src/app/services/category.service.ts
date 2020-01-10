import { Injectable } from '@angular/core';
import { Category } from '../models/category.models';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  public getCategories(): Observable<any> {
    return this.httpClient.get(`${environment.ApiRoot}/categorie`);
  }

  public getCategory( id: number): Observable<any> {
    return this.httpClient.get(`${environment.ApiRoot}/categorie/${id}`);
  }
}
