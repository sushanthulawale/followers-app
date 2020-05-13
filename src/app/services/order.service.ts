import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class OrderService {

  constructor(private http: Http) {
  }

  getOrders() { 
    let headers=new Headers();
    let token= localStorage.getItem('token'); 
    headers.append('Authorization', 'Bearer ' + token);

    let options= new RequestOptions({headers : headers});
    //this.http.intercept('/api/orders');
    return this.http.get('/api/orders', options)
      .pipe(map(response => response.json()));
    }
}
