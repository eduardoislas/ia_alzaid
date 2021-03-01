import { ChangeDetectorRef, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Message } from '../../models/message.model';
import { Subscription } from 'rxjs';
import { ChatService } from '../../services/chat.service';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Storage } from '@ionic/storage';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  @ViewChild('chatBody', {static: true}) content
  //Speech recognition
  matches: String[];
  isRecording = false;
  permissionGranted =false;
  //DialogFlow
  messages: Array<Message>=[];
  subscription: Subscription;
  input = '';
 
  user: User = new User();
  
  constructor(private menu: MenuController, 
    private router: Router,
    private navCtrl: NavController,
    private plt: Platform,
    private cd: ChangeDetectorRef,
    public chat: ChatService,
    private speechRecognition: SpeechRecognition,
    private tts: TextToSpeech,
    private storage: Storage
    ) 
    { 
      this.menu.enable(true, 'first');
    //   this.storage.get('usuario').then((val) => {
    //     this.user = val;
    // })
    // if (!this.user){
    //   this.user = new User();
    // }
  }
  
  ngOnInit() {
    this.subscription = this.chat.conversation.subscribe((data)=>this.responseonseHandler(data));
    this.sendMessage("init_chat_saludo");
    //this.startListening();
  }

  ngOnDestroy(){    
    if(this.subscription)
      this.subscription.unsubscribe();
    this.messages = [];
    this.stopListening();
  }

  perfil(){
    this.router.navigateByUrl("/profile");
  }

  getPermission(){
    // Request permissions
    this.speechRecognition.requestPermission()
    .then(
      () => this.permissionGrantedNotify(),
      () => this.permissionDeniedNotify()
    )
  }

  checkPermission(){
    // Check permission
    this.speechRecognition.hasPermission()
    .then((hasPermission: boolean) => 
      this.permissionGranted = hasPermission
    )
  }

  permissionGrantedNotify(){
    this.permissionGranted=true;
    //this.startListening();
  }

  permissionDeniedNotify(){
    this.permissionGranted=false;
    alert("La App necesita permisos de micrófono para usar la voz.");
  }

  startListening(){
    if (!this.permissionGranted){
      this.getPermission();
      return;
    }
    let options={
      language: 'es-MX'
    }
    this.isRecording=true;
    // Start the recognition process
    this.speechRecognition.startListening(options)
    .subscribe(matches =>{
      this.matches=matches;
      this.sendMessage(this.matches[0]);
      this.isRecording=false;
      this.cd.detectChanges();
    });
  }

  stopListening(){
    // Stop the recognition process (iOS only)
    this.speechRecognition.stopListening().then(()=>{
      this.isRecording=false;
    })
  }

  isIos(){
    return this.plt.is('ios');
  }


  sendMessage(message) {
    this.chat.sendMessage(message);
    this.cd.detectChanges();
  }

   responseonseHandler(data){
    console.log(data);
    if(data.length>0){
      this.scrollToBottom();
      if (data[0].sentBy=='user'){
        //Add user question to messages list
        this.messages.push(data[0]);
        //Add fake messages with gif typing...
        this.messages.push(new Message(
          "",
          "bot",
          true
        ));
      }
      
      
      if(data[0].sentBy=='bot' && this.messages.length>0 ){
        //Replace placeholder (gif) with bot  responseonse
        this.messages[this.messages.length-1]=data[0];
        //And now TTS
        // this.tts.speak({
        //   text: data[0].content,
        //   locale: 'es-MX'
        // })
        // .then(() => console.log('Success') )
        // .catch((reason: any) => console.log(reason));
        //execute action
        this.doAction(data[0]);
        }
      }
      
      this.cd.detectChanges();
      
  }

  send() {
    if (this.input != '') {
      this.sendMessage(this.input);
      this.input = '';
      setTimeout(() => {
        this.scrollToBottom()
      }, 10)
    }
  }
  
  scrollToBottom(){
    this.content.scrollToBottom(300);  //300 for animate the scroll effect.
  }

  doAction(message){
    if(message.action!="" && message.action!="input.unknown")
      setTimeout(()=>{
        this.navCtrl.navigateRoot(["/home"]);
        // this.navCtrl.navigateRoot(["/"+message.action]);
      },2000)
  }
}
