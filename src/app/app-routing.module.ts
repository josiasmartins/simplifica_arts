import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathsEnum } from './shared/enums/paths.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch:'full'
  },
  {
    path: PathsEnum.LOGIN,
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: PathsEnum.ARTs_FORMS,
    loadChildren: () => import('./modules/art/art.module').then(m => m.ArtModule)
  },
  {
    path: PathsEnum.REGISTER,
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
