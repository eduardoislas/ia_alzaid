import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private menu: MenuController, private router: Router) { 
    this.menu.enable(true, 'first');
  }

  ngOnInit() {
    
  }

  perfil(){
    this.router.navigateByUrl("profile");
  }

}
