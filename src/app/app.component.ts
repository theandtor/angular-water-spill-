import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import {ModalComponent} from './modal/modal/modal.component';

import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'Planilla';
  @ViewChild("#clients") medidorVireChild: ElementRef;
  flag_home=true;
  flag_clients=false;
  flag_list=false;
  flag_medidor=false
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  close() {
    this.sidenav.close();
  }
  changeColor($event){
    console.log($event.target.textContent)
    this.flag_home=false;
    this.flag_clients=false;
    this.flag_list=false;
    this.flag_medidor=false;
    let responseTypeSelectedNavBar=$event.target.textContent;
    switch (responseTypeSelectedNavBar){
      case "Home":
      this.flag_home=true;
      break;
      case "Clientes":
      this.flag_clients=true;
      break;
      case "Lista de Medidores":
      this.flag_list=true;
      break;
      case "Medidor":
      this.flag_medidor=true;
      break;
    }
    
    // this.medidorVireChild.nativeElement.focus();
  }
  // keyPress(event: any) {
  //   const pattern2 = /[0-9\+\-\ ]/;
  //   const pattern = /[A-Za-z\ñ]/;
  //   let inputChar = String.fromCharCode(event.charCode);
  //   if (event.keyCode != 8 && !pattern2.test(inputChar)) {
  //     event.preventDefault();
  //   }
  // // }
  // validateIdentification($event) {
    
  //   console.log(" hola")
  //   var identification = $event.target.value.trim();
  //   var identificationLong = identification.length;
  //   if (identificationLong == 13) {
  //     var total = 0;
  //     var ruc=identification.substring(0, 10);
  //     var longCedula=ruc.length;
  //     var longcheck = longCedula - 1;
  //     if (this.validate_cedula(ruc, total, longCedula, longcheck) && identification.substring(10, 13)=="001"){
  //       console.log("Ruc Correcto")
  //     }else{
  //       console.log("Ruc incorrecto")
  //     }
  //   } else if (identificationLong == 10) {
  //     var total = 0;
  //     var cedula=identification.substring(0, 10);
  //     var longCedula=cedula.length;
  //     var longcheck = longCedula - 1;
  //    if(this.validate_cedula(cedula, total, longCedula, longcheck)){
  //     console.log("Cedula correcta "+cedula)

  //    }else{
  //     console.log("Cedula incorrecta "+cedula)
  //    }
  //   }
  // }
  // validate_cedula(cad, total, longitud, longcheck):boolean {
  //   let cedulaBoolean: boolean = false;
  //   if (cad !== "" && longitud === 10) {
      
  //     for (let i = 0; i < longcheck; i++) {
  //       if (i % 2 === 0) {
  //         var aux = cad.charAt(i) * 2;
  //         if (aux > 9) aux -= 9;
  //         total += aux;
  //       } else {
  //         total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
  //       }
  //     }
  //     total = total % 10 ? 10 - total % 10 : 0;
  //     if (cad.charAt(longitud - 1) == total) {
  //       cedulaBoolean = true;
  //     } else {
  //       cedulaBoolean = false;
  //     }
  //   }
  //   return cedulaBoolean;
  // }
  // functi(){

  // }


  // animal: string;
  // name: string;

  constructor(public dialog: MatDialog) {}

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(ModalComponent, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }
  // changevalue($event){
  //   $event.target.value="jenny"
  //   $event.target.type="text"
  // }


  



}
