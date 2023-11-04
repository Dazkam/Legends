import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  MyUser: string=''
  MyPass: string=''
  activateRoute: any;

  constructor(private toastController: ToastController,
              private conexion: ConexionService,
              private router: Router) {}

  ngOnInit() {
    // this.MyUser = this.activateRoute.snapshot.paramMap.get('nombre')
    this.visualizaDatos()
  }

  visualizaDatos(){
    this.conexion.consultaDatos().subscribe(
      data => {
        this.datos = data
      }
    )
  }
  
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
