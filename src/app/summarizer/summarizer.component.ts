import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-summarizer',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './summarizer.component.html',
  styleUrl: './summarizer.component.scss'
})
export class SummarizerComponent {
  input: string = "";
  summary: string = "";

  constructor(private http : HttpClient) {}

  submitInput() {
    const url = 'http://localhost:8000/api/summarizer/';
    const body = { input: this.input };

    this.http.post<any>(url, body).subscribe({
      next: (response) => {
        this.summary = response.summary;
      },
      error: () => {
        console.log("Error fetching Sentiment Response");
      }
    });
  }
}
