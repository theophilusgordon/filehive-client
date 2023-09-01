import { Component, Input, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { FileService } from 'src/app/services/file.service';
import { CreateFile } from 'src/app/services/interfaces/create-file.interface';
import { File } from 'src/app/services/interfaces/file.interface';

@Component({
  selector: 'app-file-cards',
  templateUrl: './file-cards.component.html',
  styleUrls: ['./file-cards.component.scss'],
})
export class FileCardsComponent implements OnInit {
  @Input() files: File[] = [];

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.fileService.getFiles().subscribe((response) => {
      this.files = response;
    });
  }

  addFile(event: any) {
	console.log(event)
    // this.fileService
    //   .createFile(file)
    //   .pipe(
    //     catchError((error) => {
    //       return throwError(() => error);
    //     })
    //   )
    //   .subscribe((response) => {
    //     this.files.push(response);
    //   });
  }

  deleteFile(file: File) {
    this.fileService.deleteFile(file.id).subscribe((response) => {
      this.files = this.files.filter((file) => file.id !== response.id);
    });
  }
}
