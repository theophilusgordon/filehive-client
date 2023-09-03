import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CreateFile } from './interfaces/create-file.interface';

@Injectable({
  providedIn: 'root',
})
export class FileSharingService {
  private createdFileSubject = new BehaviorSubject<CreateFile | null>(null);

  createdFile$ = this.createdFileSubject.asObservable();

  shareCreatedFile(file: any) {
    this.createdFileSubject.next(file);
  }
}
