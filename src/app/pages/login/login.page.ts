import { Component, OnInit, ViewChild } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IonSlides, MenuController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides;

  avatars = [ 
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
];

  avatarSlide = {
    slidesPerView: 3.5
  };

  //For google login
  picture;
  name;
  email;

  constructor(private menu: MenuController, private router: Router, private afAuth: AngularFireAuth, private platform: Platform,
    private googlePlus: GooglePlus) { 
    this.menu.enable(false, 'first');
  }

  ngOnInit() {
    //this.slides.lockSwipes(true);
  }

  login( fLogin: NgForm ){
    if(fLogin.valid){
      this.disparaAlerta(true);
    }else{
      this.disparaAlerta(false);
    }
  }

  loginGoogle() {
    if (this.platform.is('android')) {
      this.loginGoogleAndroid();
    } else {
      this.loginGoogleWeb();
    }
  }

  async loginGoogleAndroid() {
    const res = await this.googlePlus.login({
      'webClientId': "885861179919-afmh5u02ou6tbkgf8e59kicstj9fulmi.apps.googleusercontent.com",
      'offline': true
    });
    const resConfirmed = await this.afAuth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken));
    const user = resConfirmed.user;
    this.picture = user.photoURL;
    this.name = user.displayName;
    this.email = user.email;
  }

  async loginGoogleWeb() {
    const res = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const user = res.user;
    console.log(user);
    this.picture = user.photoURL;
    this.name = user.displayName;
    this.email = user.email;
  }

  register( fRegister: NgForm ){
    console.log(fRegister.valid);
  }

  begin( fBegin:NgForm ){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  seleccionarAvatar( avatar ){
    this.avatars.forEach( av => av.seleccionado = false);
    avatar.seleccionado = true;
  }

  mostrarRegistro(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(2);
    this.slides.lockSwipes(true);
  }

  mostrarLogin(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  // login( email: string, password: string ) {
  //   if(email == "" && password == ""){
  //     this.disparaAlerta(true);
  //   }else{
  //     this.disparaAlerta(false);
  //   }
  // }

  disparaAlerta(success: boolean){
    if(success){
      this.router.navigateByUrl( 'home' );
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Verificar sus datos',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

}
