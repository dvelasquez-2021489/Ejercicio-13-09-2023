import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsServiceService {
  url = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}

  public get() {
    return this.http.get(this.url);
  }
  public call() {
    return this.http.get(this.url);
  }
}
