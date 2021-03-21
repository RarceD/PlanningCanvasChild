import { Groups } from 'src/app/interfaces/groups';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  //I get the groups from DB:
  urlGetClass = "http://localhost/api/groups"
  getClass() {
    return this.http.get<Groups[]>(this.urlGetClass);
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
