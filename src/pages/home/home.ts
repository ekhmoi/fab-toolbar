import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';



@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  public color: string = 'primary';
  public position: string = 'right';
  public icon: string = 'car';
  public enableBackdropDismiss: boolean = false;
  public buttonColor: string = 'dark';
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public toastCtrl: ToastController) {
  }
  public buttons =  [
      {
        icon: 'color-wand',
        title: 'Color',
        color: this.buttonColor,
        handler: ()=> {
          this.presentToast('Dont close on click');
          return false;
        }
      },
      {
        icon: 'contrast', 
        title: 'Contrast',
        color: this.buttonColor,
        handler: ()=> {
          this.presentToast('Close on click');
        }
      },
      {
        icon: 'crop',
        title: 'Crop',
        color: this.buttonColor,
        handler: ()=> {
          this.presentToast('Dont close on click');
          return false;
        }
      }
    ];
  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 1000
    });
    toast.present();
  }
}
