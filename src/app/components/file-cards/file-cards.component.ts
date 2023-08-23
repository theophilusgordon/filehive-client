import { Component, Input, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
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
    this.fileService
      .getFiles()
      .subscribe((response) => {
		this.files = response;
	  });
  }
}
