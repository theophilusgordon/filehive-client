import { Component, Input } from '@angular/core';
import { File } from 'src/app/services/interfaces/file.interface';
import {
  faFilePdf,
  faDownload,
  faUpload,
  faShare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss'],
})
export class FileCardComponent {
  userRole = JSON.parse(sessionStorage.getItem('user')!).role;

  @Input() file: File = {
    id: '',
    url: '',
    title: '',
    size: '',
    description: '',
    createdAt: '',
    updatedAt: '',
  };

  faFilePdf = faFilePdf;
  faDownload = faDownload;
  faUpload = faUpload;
  faShare = faShare;
  faTrash = faTrash;

  previewFile() {
    window.open(this.file.url, '_blank');
  }

  deleteFile() {
    console.log('delete');
  }

}
