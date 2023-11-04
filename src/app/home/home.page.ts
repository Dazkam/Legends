import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  MyUser: string=''
  MyPass: string=''
  constructor(private toastController: ToastController,
              private router: Router) {}

  enviar(){
    if(this.MyUser.length > 0){
      this.router.navigate(['../marcas',this.MyUser])
    }else{
      this.presentToast()
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Debe digitar sus credenciales',
      duration: 2000
    });
    toast.present();
  }

} 
