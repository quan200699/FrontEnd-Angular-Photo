import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from '../interface/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {
  }

  getAllPhoto(): Observable<Photo[]> {
    return this.http.get<Photo[]>('http://jsonplaceholder.typicode.com/photos');
  }

  createPhoto(photo: Photo): Observable<Photo> {
    return this.http.post<Photo>('http://jsonplaceholder.typicode.com/photos', photo);
  }

  editPhoto(photo: Photo, id: number): Observable<Photo> {
    return this.http.put<Photo>(`http://jsonplaceholder.typicode.com/photos/${id}`, photo);
  }

  deletePhoto(id: number): Observable<Photo> {
    return this.http.delete<Photo>(`http://jsonplaceholder.typicode.com/photos/${id}`);
  }

  detailPhoto(id: string): Observable<Photo> {
    return this.http.get<Photo>(`http://jsonplaceholder.typicode.com/photos/${id}`);
  }
}
