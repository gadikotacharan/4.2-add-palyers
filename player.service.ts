import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = 'http://localhost:3000/players';

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl);
  }

  // Add other CRUD methods (addPlayer, updatePlayer, deletePlayer) as in the previous response.

  // Method to fetch players based on query parameters
  getPlayersByQuery(queryParams: any): Observable<Player[]> {
    let params = new HttpParams();

    for (const key in queryParams) {
      if (queryParams.hasOwnProperty(key) && queryParams[key]) {
        params = params.append(key, queryParams[key]);
      }
    }

    return this.http.get<Player[]>(`${this.apiUrl}`, { params });
  }
}
