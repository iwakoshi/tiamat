import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GroupElement } from '../models/group-element.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  constructor(
    private http: HttpClient
  ) { }

  getElements(): Observable<GroupElement[]> {
    return this.http.get<GroupElement[]>(`${environment.apis.tiamat}/elements`);
  }
}
