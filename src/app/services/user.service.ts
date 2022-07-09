import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TUser } from "../models/typeUser";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    API_URL = 'http://localhost:8000';
    constructor(private http: HttpClient) { }

    login(user: { email: string, password: string }) {
        return this.http.post<TUser>(`${this.API_URL}/login`, user)
    }
    register(user: TUser) {
        return this.http.post<TUser>(`${this.API_URL}/register`, user)
    }
    getUsers():Observable<TUser[]>{
        return this.http.get<TUser[]>(`${this.API_URL}/users`)
    }
    
}