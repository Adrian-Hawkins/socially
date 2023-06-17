import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsRouting } from './docs.routing';
import { DocsPage } from './docs.page';
import { ComponentsModule } from '@socially/app/components';

@NgModule({
  imports: [
    CommonModule, 
    DocsRouting,
    ComponentsModule,
  ],
  declarations: [DocsPage],
})
export class DocsModule {}
