import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/weclome',
  },
  {
    path: 'weclome',
    loadChildren: () =>
      import('@socially/app/welcome/feature').then((m) => m.WelcomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@socially/app/login/feature').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('@socially/app/signup/feature').then((m) => m.SignupModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class CoreRouting {}