import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private unusedValue = 42;

  // Changed title so tests expecting 'github-actions-test' will fail
  title = 'github-actions-broken';

  constructor() {
    // console.log triggers ESLint no-console rule (if enabled)
    console.log('AppComponent constructed');
  }
}
