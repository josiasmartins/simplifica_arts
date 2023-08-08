import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { StepperComponent } from "@progress/kendo-angular-layout";
import { StepService } from 'src/app/shared/services/step.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent {

  public step = 0;

  constructor(private stepService: StepService) {}

  public nextForm() {
    this.step++;

    if (this.step >= 3) {
      this.step = 3;
    }

    this.stepService.setStep(this.step);
  }

  public backForm() {
    this.step--;

    if (this.step <= 0 ) {
      this.step = 0;
    }

    this.stepService.setStep(this.step);

  }

}




