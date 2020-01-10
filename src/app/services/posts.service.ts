import { Injectable } from '@angular/core';
import { Post } from '../models/post.models';

import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
});

  constructor(private httpClient: HttpClient) { }

  public getPosts(): Observable<any> {
    return this.httpClient.get(`${environment.ApiRoot}/post`);
  }

  public getPost(id: number): Observable<any> {
    return this.httpClient.get(`${environment.ApiRoot}/post/${id}`);
  }

  public createPost(post: Post, categoryId: number) {
    const newPost = {
      title: post.title,
      description: post.description,
      categorie: `${environment.ApiRoot}/categorie/${categoryId}`
    };
    const postResponse = this.httpClient.post<any>(`${environment.ApiRoot}/post`, newPost);
    postResponse.subscribe(po => {
      post.parts.forEach(part => {
        const newPart = {
          title: part.title,
          post: `${environment.ApiRoot}/post/${po.id}`
        };
        const partResponse = this.httpClient.post<any>(`${environment.ApiRoot}/part`, newPart);
        partResponse.subscribe(pa => {
          part.steps.forEach(step => {
            const newStep = {
                title: step.title,
                description: step.description,
                part: `${environment.ApiRoot}/part/${pa.id}`
            };
            this.httpClient.post<any>(`${environment.ApiRoot}/step`, newStep).subscribe();
          }
          );
        });
      });
    } );
    return postResponse;

  }
}
