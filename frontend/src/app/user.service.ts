import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
//http://localhost:8080/
  private serviceUrl="https://gist.githubusercontent.com/KshitijaBasarge/089130ab7577cad1e69c36dd66971efb/raw/8e52c70f1ff973825a0d3065f4698e9c6490e202/gistfile1.txt";
  constructor(private http:HttpClient) { }

  getUser():Observable<User[]>{
    return this.http.get<User[]>(this.serviceUrl);
  }

  public getSavedstocks(){
    return this.http.get(this.serviceUrl + '/savestock');
  }


}
