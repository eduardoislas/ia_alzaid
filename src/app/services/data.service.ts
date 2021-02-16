import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MenuOption } from 'src/app/interfaces/interfaces';
import { Storage } from '@ionic/storage';
import { User } from '../models/user.model';
import { Instrument } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  usuario: User = new User();

  constructor(private http: HttpClient, private storage: Storage ) { }

  getMenuOptions(){
    return this.http.get<MenuOption[]>('/assets/data/menu.json');
  }


  saveUser(user: User){
    this.usuario = user;
    this.storage.set('usuario', this.usuario)
  }

  getInstruments(){
    return this.http.get<Instrument[]>('/assets/data/instruments.json');
  }

}
