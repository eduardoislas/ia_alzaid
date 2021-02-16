import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: User = new User();
  
  constructor(private storage: Storage) {
    this.storage.get('usuario').then((val) => {
      this.user = val;
    })
   }

  ngOnInit() {
  }

}
