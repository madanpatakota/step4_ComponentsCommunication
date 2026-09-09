import { Component , signal , computed  , effect} from '@angular/core';
import { OutputParent } from './output-parent/output-parent';

@Component({
  imports: [OutputParent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
