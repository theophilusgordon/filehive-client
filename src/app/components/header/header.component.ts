import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';
import {
 faPlus
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private userId: string = sessionStorage.getItem('userId')!;
  user: User = {
    id: '',
    email: '',
    profilePhoto: '',
    firstName: '',
    lastName: '',
    otherNames: '',
  };

  faPlus = faPlus;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser(this.userId).subscribe((response) => {
      this.user = response;
    });
  }
}
