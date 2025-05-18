import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sentiment',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './sentiment.component.html',
  styleUrl: './sentiment.component.scss'
})
export class SentimentComponent {
  sentiment:string = "";
  value: string = "";
  input: string = "";

  constructor(private http: HttpClient) {}

  submit() {
    const url = 'http://localhost:8000/api/sentiment/';
    const body = { input: this.input };

    this.http.post<any>(url, body).subscribe({
      next: (response) => {
        this.sentiment = response.sentiment;
        this.value = response.val;
      },
      error: () => {
        console.log("Error fetching Sentiment Response");
      }
    });
  }
}
