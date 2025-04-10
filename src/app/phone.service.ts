import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

interface Phone {
  id: number;
  brand: string;
  model: string;
  imageurl: string;
  number: string;
  category: string;
  Price: number;
  releaseYear:number;
  operatingSystem: string;
  storageCapacity:string;
  ram: string;
  screenSize: number;
  batteryCapacity: number;
  processor: string;
  colorOptions: string;
  rating: string;
  connectivity: string;
  weight: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private apiUrl = 'http://localhost:3000/phoneListings';

  constructor(private http: HttpClient) { }

  getPhones(): Observable<Phone[]> {
    return this.http.get<Phone[]>(this.apiUrl);
  }

  getPhoneById(id: number): Observable<Phone> {
    return this.http.get<Phone>(`${this.apiUrl}/${id}`);
  }

  searchPhones(query: string): Observable<any> {
    return this.http.get(`http://localhost:3000/search?q=${encodeURIComponent(query)}`)
      .pipe(
        catchError(err => {
          console.error('Search API error:', err);
          return of([]);
        })
      );
  }
}
