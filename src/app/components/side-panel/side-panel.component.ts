import { Component } from '@angular/core';
import { faHome, faFilePdf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent {
	faHome = faHome;
	faFilePdf = faFilePdf;
}
