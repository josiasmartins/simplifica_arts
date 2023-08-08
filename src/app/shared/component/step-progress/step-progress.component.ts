import { ChangeDetectorRef, Component, HostListener, Input, OnInit } from '@angular/core';
import { StepService } from '../../services/step.service';

@Component({
  selector: 'app-step-progress',
  templateUrl: './step-progress.component.html',
  styleUrls: ['./step-progress.component.scss']
})
export class StepProgressComponent implements OnInit {

  @Input() currentStep = 0;
  steps: string[] = ['First', 'Second', 'Third', 'Forth'];


  constructor(private stepService: StepService, private ChangeDetectorRef: ChangeDetectorRef) {
    
  }


  ngOnInit(): void {

    // document.querySelectorAll('.stepper-item').forEach((element: any, index) => {
    //   // element.classList.contains('')

    //   if (index + 1 == this.active) {
    //     element.setAttribute('class', 'active');

    //     if (index + 1 < this.active)
    //     element.setAttribute('class', 'completed')
    //   }
    // })

    console.log(this.currentStep, 'ibg')

    this.stepService.step.subscribe(res => {
      this.currentStep = res;
      console.log(this.currentStep, 'ibg active')

      // document.querySelectorAll('.stepper-item').forEach((element: any, index) => {
      //       // element.classList.contains('')
      
      //       if (index + 1 == this.active) {
      //         element.setAttribute('class', 'active');
      
      //         if (index + 1 < this.active)
      //         element.setAttribute('class', 'completed')
      //       }
      //     })
      this.ChangeDetectorRef.detectChanges();
    })
    // this.ChangeDetectorRef.detectChanges();


  }

  @HostListener('click', ['$event']) 
  public test(event: any) {
    console.log(event, 'ibg 33')
  }



  public nextForm() {
    this.currentStep++;

    // this.stepService.setStep(this.step);
  }

  public backForm() {
    this.currentStep--;

    if (this.currentStep <= 0 ) {
      this.currentStep = 0;
    }

    // this.stepService.setStep(this.step);
    
  }

}
