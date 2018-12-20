import { Component } from '@angular/core';
import Amplify,{ Auth, API } from 'aws-amplify';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(){}
  postLogin(email, password) {
    console.info(email, password)
  }
}
