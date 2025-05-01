import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { dataRepresentation } from '../data-representation';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class ExtensionService {

  // private baseUrl: string = 'assets/data.json';
  private baseUrl: string = 'http://localhost:5000/extensions';

  constructor(
    private http: HttpClient
  ) { }

  getAllExtensions(): Observable<dataRepresentation[]> {
    return this.http.get<dataRepresentation[]>(this.baseUrl);
  }
  getActiveExtensions(): Observable<dataRepresentation[]>{
    return this.getAllExtensions().pipe(
      map(extensions => extensions.filter(extension => extension.isActive))
    );
  }
  getInactiveExtensions(): Observable<dataRepresentation[]> {
    return this.getAllExtensions().pipe(
      map(extensions => extensions.filter(extension => !extension.isActive))
    );  
  }

  deleteExtension(extension: dataRepresentation): Observable<dataRepresentation> {
    const idUrl = `${this.baseUrl}/${extension.id}`;
    return this.http.delete<dataRepresentation>(idUrl);

  }

  updateExtensionStatus(extension: dataRepresentation): Observable <dataRepresentation> {
    const idUrl = `${this.baseUrl}/${extension.id}`;
    return this.http.put<dataRepresentation>(idUrl, extension, httpOptions);  
  }
}
