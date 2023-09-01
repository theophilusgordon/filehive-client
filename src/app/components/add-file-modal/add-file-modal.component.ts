import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { CreateFile } from 'src/app/services/interfaces/create-file.interface';

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

  constructor(public activeModal: NgbActiveModal) {}

  handleFile(event: any) {
    this.file = event.target.files[0];
  }

  onAddFile() {
    this.onFileAdd.emit({
      title: this.title,
      description: this.description,
      file: this.file,
    });
    this.activeModal.dismiss();
  }

  dismissModal() {
    this.activeModal.dismiss();
  }
}
