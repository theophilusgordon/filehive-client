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

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  getFiles(): Observable<File[]> {
    return this.http.get<File[]>(`${this.apiUrl}/`, {
      headers: this.getHeaders(),
    });
  }

  getFile(id: string): Observable<File> {
    return this.http.get<File>(`${this.apiUrl}/file/${id}`, {
      headers: this.getHeaders(),
    });
  }

  createFile(data: CreateFile): Observable<File> {
    return this.http.post<File>(`${this.apiUrl}/upload`, data, {
      headers: this.getHeaders(),
    });
  }

  updateFile(id: string, data: File): Observable<File> {
    return this.http.patch<File>(`${this.apiUrl}/file/${id}`, data, {
      headers: this.getHeaders(),
    });
  }

  deleteFile(id: string): Observable<File> {
    return this.http.delete<File>(`${this.apiUrl}/file/${id}`, {
      headers: this.getHeaders(),
    });
  }

  downloadFile(file: File): Observable<Blob> {
    return this.http.get(file.url, { responseType: 'blob' });
  }

  sendFile(id: string, email: string): Observable<string> {
    return this.http.post<string>(
      `${this.apiUrl}/file/${id}/send`,
      { email },
      { headers: this.getHeaders() }
    );
  }
}
