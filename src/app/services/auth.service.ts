import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _client : HttpClient
  ) { }

  login() {
    this._client.post<any>("https://localhost:44338/api/auth", {email : "aude@api.com", password : "test1234"})
    .subscribe((data : any) => {
      console.log(data)
      localStorage.setItem('token', data.token)
    } )
  }

  getlist() {
    // let myheaders = new HttpHeaders ({
    //   'Authorization' : 'Bearer '+localStorage.getItem('token')
    // })
    this._client.get<any>("https://localhost:44338/api/auth").subscribe(
      (data : any) => console.log(data)

      )
  }
}


export interface User {


}
