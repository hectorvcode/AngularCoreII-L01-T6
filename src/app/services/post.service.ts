import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interafaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<any> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
