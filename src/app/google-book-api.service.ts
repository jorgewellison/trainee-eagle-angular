import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GoogleBookApiService {

  constructor(private http: Http) { }


  BuscarLivros(search) { //buscando livros na API utilizando a requisição get
    const encodedURI  = encodeURI("https://www.googleapis.com/books/v1/volumes?q="+ search +"&maxResults=12")
    return this.http.get(encodedURI)
        .map((response: Response) => response.json());
  }

  BuscaViaISBN(isbn){
  var encodedURI = encodeURI("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn +"&maxResults=1");
  return this.http.get(encodedURI)
      .map((response: Response) => response.json());
}


}
