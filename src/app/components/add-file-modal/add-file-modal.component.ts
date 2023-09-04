import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faFileUpload, faUpload, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CreateFile } from 'src/app/services/interfaces/create-file.interface';
import { FileSharingService } from 'src/app/services/file-sharing.service';

@Component({
  selector: 'app-add-file-modal',
  templateUrl: './add-file-modal.component.html',
  styleUrls: ['./add-file-modal.component.scss'],
})
export class AddFileModalComponent {
  title: string = '';
  description: string = '';
  file: any = null;

  @Output() onFileAdd: EventEmitter<CreateFile> = new EventEmitter();

  @Input() isSubmitted: boolean = false;

  faFileUpload = faFileUpload;
  faUpload = faUpload;
  faTimes = faTimes;

  constructor(
    public activeModal: NgbActiveModal,
    private fileSharingService: FileSharingService
  ) {}

  handleFile(event: any) {
    this.file = event.target.files[0];
  }

  onAddFile() {
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('title', this.title);
    formData.append('description', this.description);

    this.fileSharingService.shareFile(formData);

    this.activeModal.dismiss();
  }

  dismissModal() {
    this.activeModal.dismiss();
  }
}
