import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  API_KEY = 'AIzaSyCk6teXMybrdfSnfqXBPpnh_8lJAk-Wwgk';
  input: string = '';
  books: any[] = [];

  onSubmit(form: NgForm) {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${this.input}` //&key=${this.API_KEY}
    )
      .then((response) => response.json())
      .then((result) => {
        this.books = result.items;
      });
  }
}
