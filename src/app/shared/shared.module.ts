import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepProgressComponent } from './component/step-progress/step-progress.component';
import { FormsInpputComponent } from './component/forms-inpput/forms-inpput.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StepProgressComponent,
    FormsInpputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    StepProgressComponent,
    FormsInpputComponent
  ]
})
export class SharedModule { }
