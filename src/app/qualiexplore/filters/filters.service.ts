import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FiltersService {
  constructor(private http: HttpClient) { }

  async getQuestions() {
    try {
      const response = await this.http.get('./assets/json/filters.json').toPromise();
      return response;
    } catch (err) {
      console.log(err);
    }
  }
}
