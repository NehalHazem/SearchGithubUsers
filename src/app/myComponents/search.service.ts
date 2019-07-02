import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = 'https://api.github.com/users';
  clientID = '7302da92643c828705a5';
  clientSecret = 'e86c22370ccff69f00f4db9c57fdcd806f4cfcdc';

  constructor(private http: HttpClient) { }

  searchUser(login) {
    // return this.http.get(`${this.url}/${login}`);
    return this.http.get(`${this.url}/${login}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);
  }

}
