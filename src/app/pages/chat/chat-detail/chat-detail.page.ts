import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage implements OnInit {
  @ViewChild('IonContent', { static: true }) content: IonContent
  paramData: any;
  msgList: any;
  userName: any;
  user_input: string = "";
  User: string = "Me";
  toUser: string = "HealthBot";
  start_typing: any;
  loader: boolean;



  constructor(public activRoute: ActivatedRoute) { 
  this.activRoute.params.subscribe((params) => {
     //console.log(params)
    this.paramData = params
    this.userName = params.name
  });
  this.msgList = [
    {
      userId: "HealthBot",
      userName: "HealthBot",
      userAvatar: "../../../assets/avatars/av-5.png",
      time: "12:00",
      message: "Hola, esta es una prueba del chat con otros cuidadores como tú",
      id: 0
    },
    {
      userId: "Me",
      userName: "Me",
      userAvatar: "../../../assets/avatars/av-2.png",
      time: "12:03",
      message: "Hola, se ve muy bien la prueba ",
      id: 1,
    },
    {
      userId: "HealthBot",
      userName: "HealthBot",
      userAvatar: "../../../assets/avatars/av-5.png",
      time: "12:05",
      message: "Esta es una conversación con otro usuario de la red.",
      id: 3
    },
    {
      userId: "Me",
      userName: "Me",
      userAvatar: "../../../assets/avatars/av-2.png",
      time: "12:06",
      message: "Es muy sencillo comunicarse con otros usuarios.",
      id: 4
    },
    {
      userId: "HealthBot",
      userName: "HealthBot",
      userAvatar: "../../../assets/avatars/av-5.png",
      time: "12:07",
      message: "Puedes escribir cualquier cosa.",
      id: 5
    }
  ];
}

ngOnInit() {
}
sendMsg() {
  if (this.user_input !== '') {
    this.msgList.push({
      userId: this.toUser,
      userName: this.toUser,
      userAvatar: this.paramData.image ? this.paramData.image : "../../../assets/avatars/av-5.png",
      time: "12:01",
      message: this.user_input,
      id: this.msgList.length + 1
    })
    this.user_input = "";
    this.scrollDown()
    setTimeout(() => {
      this.senderSends()
    }, 500);

  }
}
senderSends() {
  this.loader = true;
  setTimeout(() => {
    this.msgList.push({
      userId: this.User,
      userName: this.User,
      userAvatar: "../../../assets/avatars/av-2.png",
      time: "12:01",
      message: "Respuesta en tiempo real de otro usuario de la red."
    });
    this.loader = false;
    this.scrollDown()
  }, 2000)
  this.scrollDown()
}
scrollDown() {
  setTimeout(() => {
    this.content.scrollToBottom(50)
  }, 50);
}

userTyping(event: any) {
  // console.log(event);
  this.start_typing = event.target.value;
  this.scrollDown()
}
}