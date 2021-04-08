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
  urlGet = "https://localhost:44313"
  getClass() {
    let url = this.urlGet + "/classes";
    return this.http.get<Classes[]>(url);
  }
  getGroups() {
    let url = this.urlGet + "/groups";
    return this.http.get<Groups[]>(url);
  }
  //I create the new groups:
  // postGroup(group) {
  //   group.gatewayUUID = "Test"
  //   group.clientID = 1
  //   group.lamps = []
  //   console.log(group);
  //   this.http.post<Groups>(this.groupLamp, group).subscribe(data => {
  //     // console.log(data);
  //   })
  // }

}
