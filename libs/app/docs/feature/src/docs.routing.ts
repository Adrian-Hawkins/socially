import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsPage } from './docs.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DocsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRouting {}