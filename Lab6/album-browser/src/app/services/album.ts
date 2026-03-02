import {Injectable} from '@angular/core';
import {Album} from '../models/album.model';
import {Observable} from 'rxjs';
import {Photo} from "../models/photo.model";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AlbumService {
  baseURL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseURL}/albums`);
  }
  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseURL}/albums/${id}`);
  }
  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseURL}/albums/${id}/photos`);
  }
  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseURL}/albums/${album.id}`, album);

  }
  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/albums/${id}`);
  }
}
