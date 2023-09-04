import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileSharingService {
  private sharedFileSubject = new BehaviorSubject<any | null>(null);

  sharedFile$ = this.sharedFileSubject.asObservable();

  shareFile(file: any) {
    this.sharedFileSubject.next(file);
  }
}
