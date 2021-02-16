import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  users: any[] = [
    { name: 'María de los ángeles Gómez', picture: '../../assets/avatars/av-3.png', message: 'Hola, ¿cómo estás?...'},
    { name: 'Guadalupe Contreras', picture: '../../assets/avatars/av-5.png', message: 'ey, me gustaría platicar contigo...' },
    { name: 'Mariana Mizraji', picture: '../../assets/avatars/av-7.png', message: 'Hola, me gustó lo que publicaste.' },
    { name: 'Juan Navarro', picture: '../../assets/avatars/av-6.png', message: 'Me puedes compartir estrategias para...' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
