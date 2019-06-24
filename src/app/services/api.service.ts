import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})
export class APIService {
    
    constructor(
        private http: HttpClient
    ) { }

    getPosts (): any {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        
        return this.http.get(url);
    }

    getPost (id): any {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        
        return this.http.get(url);
    }
}