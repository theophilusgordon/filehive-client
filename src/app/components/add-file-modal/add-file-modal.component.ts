import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FileService } from 'src/app/services/file.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-add-file-modal',
  templateUrl: './add-file-modal.component.html',
  styleUrls: ['./add-file-modal.component.scss'],
})
export class AddFileModalComponent {
  constructor(
    private fileService: FileService,
    public activeModal: NgbActiveModal
  ) {}

  title: string = '';
  description: string = ''
  file: any = null

  addFile() {
    this.fileService.createFile({
      title: this.title,
      description: this.description,
	  file: this.file
    }).pipe(
		catchError((error) => {
			return throwError(() => error)
		})
	).subscribe((response) => {
		console.log(response)
	});
    this.activeModal.dismiss();
  }

  dismissModal() {
    this.activeModal.dismiss();
  }
}
