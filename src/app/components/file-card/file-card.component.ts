import { Component, EventEmitter, Input, Output } from '@angular/core';
import { File } from 'src/app/services/interfaces/file.interface';
import {
  faFilePdf,
  faDownload,
  faUpload,
  faShare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss'],
})
export class FileCardComponent {
  userRole = JSON.parse(sessionStorage.getItem('user')!).role;

  @Output() onFileDelete: EventEmitter<File> = new EventEmitter()

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

  onDeleteFile() {
    this.onFileDelete.emit(this.file)
  }

}
