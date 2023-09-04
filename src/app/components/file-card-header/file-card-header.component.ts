import { Component } from '@angular/core';

@Component({
  selector: 'app-file-card-header',
  templateUrl: './file-card-header.component.html',
  styleUrls: ['./file-card-header.component.scss'],
})
export class FileCardHeaderComponent {
  userRole: string = JSON.parse(sessionStorage.getItem('user')!).role;
}
