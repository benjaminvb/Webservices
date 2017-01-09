import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getSolLog(): Observable<any> {
    return this.http.get('/solarlog').map(res => res.json());
  }

  addSolLog(solvalue): Observable<any> {
    return this.http.post("/solarlog", JSON.stringify(solvalue), this.options);
  }

  editSolLog(solvalue): Observable<any> {
    return this.http.put(`/solarlog/${solvalue._id}`, JSON.stringify(solvalue), this.options);
  }

  deleteSolLog(solvalue): Observable<any> {
    return this.http.delete(`/solarlog/${solvalue._id}`, this.options);
  }
}