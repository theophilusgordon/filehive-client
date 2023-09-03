import { Component, EventEmitter, Input, Output } from '@angular/core';
import { File } from 'src/app/services/interfaces/file.interface';
import {
  faFilePdf,
  faDownload,
  faUpload,
  faShare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteFileModalComponent } from '../delete-file-modal/delete-file-modal.component';
import { ShareFileModalComponent } from '../share-file-modal/share-file-modal.component';
import { FileService } from 'src/app/services/file.service';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss'],
})
export class FileCardComponent {
  userRole = JSON.parse(sessionStorage.getItem('user')!).role;

  @Output() onFileDelete: EventEmitter<File> = new EventEmitter();
  @Output() onFileShare: EventEmitter<File> = new EventEmitter();

  isConfirmedDelete: boolean = false;

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

  constructor(
    private modalService: NgbModal,
    private fileService: FileService
  ) {}

  openDeleteFileModal() {
    const modalRef = this.modalService.open(DeleteFileModalComponent);
    modalRef.componentInstance.onDelete.subscribe(() => {
      this.onDeleteFile();
    });
  }

  openShareFileModal() {
    const modalRef = this.modalService.open(ShareFileModalComponent);
    modalRef.componentInstance.onShare.subscribe(() => {
      this.onShareFile();
    });
  }

  previewFile() {
    window.open(this.file.url, '_blank');
  }

  onShareFile() {
    this.onFileShare.emit(this.file);
  }

  downloadFile() {
    this.fileService.downloadFile(this.file).subscribe(
      (blob) => {
        import('file-saver').then((module) => {
          const { saveAs } = module;
          saveAs(blob, this.file.title);
        });
      },
      (error) => {
        console.error('Error downloading file:', error);
      }
    );
  }

  onDeleteFile() {
    this.onFileDelete.emit(this.file);
  }
}
