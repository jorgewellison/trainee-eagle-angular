import { GoogleBookApiService } from './../google-book-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books;

  constructor(private googleBookApiService: GoogleBookApiService) { }

  OnSearch(s){
    this.googleBookApiService.BuscarLivros(s)
        .subscribe((data) => {
            this.books = data.items;
        });
  }

  ngOnInit() {
     this.googleBookApiService.BuscarLivros('javascript')
          .subscribe((data)=>{
             //console.log(data.items)
          })
  }

}
