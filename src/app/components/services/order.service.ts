import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { Constants } from "src/app/constants";

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get(`${Constants.apiEndpoint}/Orders`);
  }
}
  // Create
  // createTask(data: any): Observable<any> {
  //   let API_URL = `${this.apiUrl}/create-task`;
  //   return this.http.post(API_URL, data).pipe(catchError(this.error));
  // }
  // Read
