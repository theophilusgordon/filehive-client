import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-delete-file-modal',
  templateUrl: './delete-file-modal.component.html',
  styleUrls: ['./delete-file-modal.component.scss'],
})
export class DeleteFileModalComponent {
  @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();

  faTrash = faTrash;
  faTimes = faTimes;
  
  constructor(private activeModal: NgbActiveModal) {}

  onDeleteFile() {
	  this.onDelete.emit();
    this.activeModal.dismiss();
  }

  dismissModal() {
    this.activeModal.dismiss();
  }
}
