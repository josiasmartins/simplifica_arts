import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PathsEnum } from 'src/app/shared/enums/paths.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      persona: ['', Validators.required],
      id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  public navigateToRegister() {
    this.router.navigate([PathsEnum.REGISTER])
  }

  public navigateToARTs() {
    this.router.navigate([PathsEnum.ARTs_FORMS])
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Implemente aqui a lógica de login ou envio do formulário
      console.log(this.loginForm.value);
    } else {
      // Exibir mensagens de erro nos campos inválidos (touched)
      this.loginForm.markAllAsTouched();
    }
  }

  public register(): void {
    this.router.navigate(['/register'])
  }
}
