import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {
  }

  AlertInstagram(){
    window.alert('Atencion!!.....Este sitio es un clone de Instagram, con fines didacticos. por ende no debe agragar niguna de sus cuentas, correo o claves, Disculpe las molestas ocacionadas.....');

  }

}
