import { NgModule } from '@angular/core';

//import { CommonModule } from '@angular/common';

import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatMenuModule} from '@angular/material/menu';

import {MatIconModule} from '@angular/material/icon';//module added

import {MatButtonModule} from '@angular/material';


const MaterialComponents =
[
  MatIconModule,//module added

  MatCheckboxModule,

  MatMenuModule,

  MatButtonModule,
]
@NgModule({
  declarations: [],

  imports: 
  [
   // CommonModule
    MaterialComponents
  ],

  exports:
  [
    MaterialComponents
  ],
  
})
export class MaterialModule { }
