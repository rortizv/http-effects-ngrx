import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Datum, Support, User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private url = 'https://reqres.in/api';
  public users!: User;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.url}/users?per_page=9`)
      .pipe(
        map(resp => {
          this.users = resp as User;
          return this.users.data;
        })
      );
  }
}
