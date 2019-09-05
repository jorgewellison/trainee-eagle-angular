import { GoogleBookApiService } from './../google-book-api.service';
import { AuthServiceService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthServiceService) { }

  ngOnInit() {
  }

  logado() : boolean{
    if (this.authService.usuarioAutenticado) {
      return true;
    }
    else{
      return false;
    }
  }
}
