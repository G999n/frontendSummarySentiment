import { Routes } from '@angular/router';
import { SentimentComponent } from './sentiment/sentiment.component';
import { SummarizerComponent } from './summarizer/summarizer.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "sentiment", component: SentimentComponent},
    {path: "summarizer", component: SummarizerComponent}
];
