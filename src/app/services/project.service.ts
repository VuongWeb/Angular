import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TProject } from '../models/typeProject';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  API_URL: string = 'http://localhost:8000/projects'
  API_URL_cate: string = 'http://localhost:8000/categoriesProject'

  constructor(private http: HttpClient) { }

  getProject(id: any): Observable<TProject> {
    return this.http.get<TProject>(`${this.API_URL}/${id}`)
  }
  getProjects(): Observable<TProject[]> {
    return this.http.get<TProject[]>(`${this.API_URL}`)
  }
  getProjectsLimit(): Observable<TProject[]> {
    return this.http.get<TProject[]>(`${this.API_URL}?_limit=3`)
  }
  removeProject(id: number): Observable<TProject> {
    return this.http.delete<TProject>(`${this.API_URL}/${id}`)
  }
  addProject(project: any): Observable<TProject> {
    return this.http.post<TProject>(this.API_URL, project)
  }
  updateProject(project: TProject) {
    return this.http.put<TProject>(`${this.API_URL}/${project.id}`, project);
  }
  getCategoriesProjects() {
    return this.http.get(`${this.API_URL_cate}`);
  }
}
