import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathsEnum } from 'src/app/shared/enums/paths.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public navigateToARTs() {
    this.router.navigate([PathsEnum.ARTs_FORMS])
  }

  public navigateToLogin() {
    this.router.navigate([PathsEnum.LOGIN])
  }

}
