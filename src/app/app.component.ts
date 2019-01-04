import { Component } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  isAuth = false;

 
 // "/Users/charlesjussan//Documents/Angular/ProjetFirebase/node_modules/bootstrap/dist/css/bootstrap.css",

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 2000
    );
  }


}
