import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appComponentsFeatureRoutes } from './lib.routes';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(appComponentsFeatureRoutes)],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ComponentsModule {}
