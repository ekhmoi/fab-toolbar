import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';



@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  public items: Array<number> = []

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public toastCtrl: ToastController) {
    for(let i = 0; i < 200; i++) {
      this.items.push(i);
    }
  }
  public buttons =  [
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
    ];
  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 1000
    });
    toast.present();
  }
}
