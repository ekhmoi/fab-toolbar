import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';


import { EkhmoiFabToolbar } from '../fab-toolbar/fab-toolbar';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public toastCtrl: ToastController) {
  
  }
  public options = {
    color: "primary",
    icon: 'images',
    enableBackdropDismiss: true,
    buttons: [
      {
        icon: 'color-wand', 
        handler: ()=> {
          this.presentToast('Dont close on click');
          return false;
        }
      },
      {
        icon: 'contrast', 
        handler: ()=> {
          this.presentToast('Close on click');
        }
      },
      {
        icon: 'crop', 
        handler: ()=> {
          this.presentToast('Dont close on click');
          return false;
        }
      }
    ]
  }
  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 1000
    });
    toast.present();
  }
  onAlert() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: 'Enter your login and password',
      cssClass: 'alert-with-border',
      inputs: [
        {
          name: 'login',
          placeholder: 'Login',
          type: 'text',
          value: 'test'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password',
          value: 'test'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Next',
          handler: data => {
            return false;
          }
        }
      ]
    });
    prompt.present();
  }
}
