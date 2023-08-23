import { Component, Input } from '@angular/core';
import { File } from 'src/app/services/interfaces/file.interface';
import {
  faFile,
  faDownload,
  faUpload,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss'],
})
export class FileCardComponent {
  @Input() file: File = {
    id: '',
    url: '',
    title: '',
    size: '',
    description: '',
    createdAt: '',
    updatedAt: '',
  };

  faFile = faFile;
  faDownload = faDownload;
  faUpload = faUpload;
  faShare = faShare;


  previewFile() {
    window.open(this.file.url, '_blank');
  }

  getFormattedDate(dateString: string): string {
    const date = new Date(dateString);
    return moment(date).format('Do MMMM, YYYY');
  }
}
