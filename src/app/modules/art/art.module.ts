import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtRoutingModule } from './art-routing.module';
import { ArtComponent } from './component/art/art.component';

import { MatStepperModule } from '@angular/material/stepper'; // Importe o módulo MatStepperModule para usar o mat-horizontal-stepper
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
// import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ArtComponent
  ],
  imports: [
    CommonModule,
    ArtRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    // MatStepperModule,
    MatIconModule,
    IonicModule,
    SharedModule
    // MatStepperModule
  ]
})
export class ArtModule { }
