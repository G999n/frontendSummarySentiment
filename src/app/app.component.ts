import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SentimentComponent } from './sentiment/sentiment.component';
import { SummarizerComponent } from "./summarizer/summarizer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SentimentComponent, SummarizerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
