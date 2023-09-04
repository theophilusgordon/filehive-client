import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faShare, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FileSharingService } from 'src/app/services/file-sharing.service';
import { File } from 'src/app/services/interfaces/file.interface';
import { FileService } from 'src/app/services/file.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-share-file-modal',
  templateUrl: './share-file-modal.component.html',
  styleUrls: ['./share-file-modal.component.scss'],
})
export class ShareFileModalComponent implements OnInit {
  @Input() isSubmitted: boolean = false;
  email: string = '';

  faShare = faShare;
  faTimes = faTimes;

  file: File = {
    id: '',
    url: '',
    title: '',
    size: '',
    description: '',
    createdAt: '',
    updatedAt: '',
  };

  constructor(
    private activeModal: NgbActiveModal,
    private fileService: FileService,
    private fileSharingService: FileSharingService
  ) {}
  ngOnInit(): void {
    this.fileSharingService.sharedFile$.subscribe((file: File | null) => {
      if (file) {
        this.file = file;
      }
    });
  }

  dismissModal() {
    this.activeModal.dismiss();
  }

  shareFile() {
    this.fileService
      .sendFile(this.file.id, this.email)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      )
      .subscribe((response) => {
        console.log(response);
      });
    this.activeModal.dismiss();
  }
}
