import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  faShare,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-share-file-modal',
  templateUrl: './share-file-modal.component.html',
  styleUrls: ['./share-file-modal.component.scss'],
})
export class ShareFileModalComponent {
  @Input() isSubmitted: boolean = false;
  email: string = ''

  faShare = faShare;
  faTimes = faTimes;

  constructor(private activeModal: NgbActiveModal) {}

  dismissModal() {
    this.activeModal.dismiss();
  }

  onShareFile() {
	this.activeModal.dismiss();
  }
}
