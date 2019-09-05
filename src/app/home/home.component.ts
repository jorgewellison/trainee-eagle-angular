import { AuthServiceService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string;

  constructor(public authService: AuthServiceService) {
    this.message = '';
  }

  fazerLogin(usuario: string, senha: string) : boolean {
    this.message = '';
    if (!this.authService.fazerLogin(usuario, senha)){
      this.message = "Senha ou usuario incorreto(s)!";
      setTimeout(function(){
        this.message = '';
      }.bind(this), 2500);
      }
      return false;
    }

  logout() : boolean { this.authService.logout(); return false; }

  ngOnInit() {}

  }
