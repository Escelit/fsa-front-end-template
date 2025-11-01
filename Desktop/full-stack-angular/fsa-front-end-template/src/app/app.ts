import { Component } from '@angular/core';
import { BackButton } from "./back-button/back-button";
import { SmallX } from "./small-x/small-x";

@Component({
  selector: 'app-root',
  imports: [BackButton, SmallX],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'fsa-front-end-template';
}
