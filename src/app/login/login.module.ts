import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login/form-login.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    FormLoginComponent
  ]
})
export class LoginModule { }
