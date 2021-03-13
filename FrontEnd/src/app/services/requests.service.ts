import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

    urlGetClass = "https://www.google.com/"
    //I get the groups in DB:
    getClass() {
      return this.http.get<string>(this.urlGetClass);
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
