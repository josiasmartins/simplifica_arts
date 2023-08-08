import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-forms-inpput',
  templateUrl: './forms-inpput.component.html',
  styleUrls: ['./forms-inpput.component.scss']
})
export class FormsInpputComponent implements OnInit {

  @ViewChild('input', { static: false, read: ElementRef }) input!: ElementRef<HTMLInputElement>;

  @Input() placeholder!: string;
  @Input() forms!: any;
  @Input() id: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  activeFocus() {
    const inputEl = (document.querySelector('#input') as HTMLInputElement).click();
    this.input.nativeElement.focus();
    // this.input.nativeElement.click();
    console.log(inputEl, this.input.nativeElement);
    inputEl;
  }

}
