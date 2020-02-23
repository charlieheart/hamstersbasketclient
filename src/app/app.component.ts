import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  url = 'https://hamster-basket-api.herokuapp.com/items';
  items$: Observable<any[]> = this.http.get<any[]>(this.url);
  items: any[];
  input: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getItems();
  }
  getItems() {
    this.items$.subscribe(items => this.items = items);
  }
  crossOut(item: any) {
    this.http.put(`${this.url}/${item._id}`, {...item, state: 'crossedOut'}).subscribe(() => this.getItems(), err => console.log(err));
  }
  delete(item: any) {
    this.http.delete(`${this.url}/${item._id}`).subscribe(res => this.getItems(), err => console.log(err));
  }
  addItem() {
    this.http.post(this.url, {name: this.input}).subscribe(res => this.getItems(), err => console.log(err));
    this.input = null;
  }
}

