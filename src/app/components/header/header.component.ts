import { Component, ViewChild } from '@angular/core';
import { User } from 'src/app/services/interfaces/user.interface';
import {
  faPlus,
  faUserCircle,
  faUserEdit,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AddFileModalComponent } from '../add-file-modal/add-file-modal.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user: User = JSON.parse(sessionStorage.getItem('user')!);

  @ViewChild(AddFileModalComponent)
  addFileModalComponent!: AddFileModalComponent;

  dropDownIsOpen: boolean = false;

  faPlus = faPlus;
  faUserCircle = faUserCircle;
  faUserEdit = faUserEdit;
  faSignOutAlt = faSignOutAlt;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private activeModalService: NgbActiveModal
  ) {}

  openAddFileModal() {
    this.modalService.open(AddFileModalComponent);
  }

  closeAddFileModal() {
    this.activeModalService.close();
  }

  toggleDropDown() {
    this.dropDownIsOpen = !this.dropDownIsOpen;
  }

  signOut() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
