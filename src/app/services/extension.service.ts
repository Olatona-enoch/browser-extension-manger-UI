import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { dataRepresentation } from '../data-representation';


@Injectable({
  providedIn: 'root'
})
export class ExtensionService {

  private baseUrl: string = 'assets/data.json';


  constructor(
    private http: HttpClient
  ) { }

  getAllExtensions(): Observable<dataRepresentation[]> {
    return this.http.get<dataRepresentation[]>(this.baseUrl);
  }
  getActiveExtensions(): Observable<dataRepresentation[]>{
    return this.getAllExtensions().pipe(
      map(data => data.filter(extension => extension.isActive))
    );
  }
  getInactiveExtensions(): Observable<dataRepresentation[]> {
    return this.getAllExtensions().pipe(
      map(data => data.filter(extension => !extension.isActive))
    );  
  }
}
