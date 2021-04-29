import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  segmentTab: any;
  chatData: ({ "name": string; "image": string; "description": string; "count": string; "status": string; "time": string; } | { "name": string; "status": string; "image": string; "description": string; "time": string; "count"?: undefined; })[];

  constructor(public route: Router) {
    this.chatData = [ {
        "name": 'Jimena',
        "image": '../../assets/avatars/av-3.png',
        "description": 'Hola, ¿cómo estás?...',
        "status": "online",
        "time": '11:15'
      },{
      "name": 'Alba',
      "image": '../../assets/avatars/av-5.png',
      "description": 'Miré tu publicación y me gustaría...',
      "count": '2',
      "time": '12:17',
      "status": "ofline"
    }, {
      "name": 'Oliver',
      "image": '../../assets/avatars/av-4.png',
      "description": 'Mi situación es similar yo...',
      "time": '12:17',
      "status": "online"
    }, {
      "name": 'Lucía',
      "image": '../../assets/avatars/av-7.png',
      "description": 'Claro, con gusto te comparto la inf...',
      "count": '2',
      "time": 'Ayer',
      "status": "online"
    }, {
      "name": 'Héctor',
      "image": '../../assets/avatars/av-2.png',
      "description": 'En serio?, yo también soy de ahí...',
      "time": 'Domingo',
      "status": "ofline"
    }
    ]
  }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
    console.log(this.segmentTab);
  }
  goforChat(chat) {
    this.route.navigate(['chat-detail', chat]);

  }


}
