import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  private _step$ = new BehaviorSubject<any>(0);

  constructor() { }


  get step() {
    return this._step$.asObservable();
  }

  public setStep(value: any) {
    this._step$.next(value);
  }

}
