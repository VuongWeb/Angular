import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TPost } from '../models/typePost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL: string = 'http://localhost:8000/posts'
  API_URL_cate: string = 'http://localhost:8000/categoriesPosts'
  API_URL_cate_post: string = 'http://localhost:8000/categoriesPosts'

  constructor(private http: HttpClient) { }

  getPost(id: any): Observable<TPost> {
    return this.http.get<TPost>(`${this.API_URL}/${id}`)
  }
  getPostLimit():Observable<TPost>{
    return this.http.get<TPost>(`${this.API_URL}?_limit=2`)
  }
  getPosts(): Observable<TPost[]> {
    return this.http.get<TPost[]>(`${this.API_URL}`)
  }
  removePost(id: number): Observable<TPost> {
    return this.http.delete<TPost>(`${this.API_URL}/${id}`)
  }
  addPost(post: any): Observable<TPost> {
    return this.http.post<TPost>(this.API_URL, post)
  }
  updatePost(post: TPost) {
    return this.http.put<TPost>(`${this.API_URL}/${post.id}`, post);
  }
  getCategoriesPosts(){
    return this.http.get(`${this.API_URL_cate}`);
  }
    getCategoriesOfPosts(id:number){
      return this.http.get(`${this.API_URL_cate}/${id}?_embed=posts`);
    }
}
