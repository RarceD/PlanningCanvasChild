import { Classes } from './../interfaces/classes';
import { Groups } from 'src/app/interfaces/groups';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  //I get the groups from DB:
  public urlGet = "https://localhost:5002";

  getClass() {
    let url = this.urlGet + "/classes";
    return this.http.get<Classes[]>(url);
  }
  modifiedClass(postData: Classes, add: boolean) {
    let url = this.urlGet+ "/classes";
    if (add)
      url += "/add";
    else
      url += "/delete";
    this.http.post<any>(url, postData).subscribe(data => {
      // console.log(data);
    })
  }
  getGroups() {
    let url = this.urlGet + "/groups";
    return this.http.get<Groups[]>(url);
  }
  modifiedGroups(postData: Groups, add: boolean) {
    let url = this.urlGet+ "/groups";
    if (add)
      url += "/add";
    else
      url += "/delete";
    console.log(url, postData);
    this.http.post<any>(url, postData).subscribe()
  }
}
