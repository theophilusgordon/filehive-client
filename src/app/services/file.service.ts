import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { File } from './interfaces/file.interface';
import { CreateFile } from './interfaces/create-file.interface';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private apiUrl = 'http://localhost:5000/files';

  private getHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  constructor(private http: HttpClient) {}

  getFiles(): Observable<File[]> {
    return this.http.get<File[]>(`${this.apiUrl}/`, {
      headers: this.getHeaders(),
    });
  }

  getFile(id: string): Observable<File> {
    return this.http.get<File>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders(),
    });
  }

  createFile(data: CreateFile): Observable<File> {
    return this.http.post<File>(`${this.apiUrl}/`, data, {
      headers: this.getHeaders(),
    });
  }

  updateFile(id: string, data: File): Observable<File> {
    return this.http.patch<File>(`${this.apiUrl}/${id}`, data, {
      headers: this.getHeaders(),
    });
  }

  deleteFile(id: string): Observable<File> {
    return this.http.delete<File>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders(),
    });
  }
}
