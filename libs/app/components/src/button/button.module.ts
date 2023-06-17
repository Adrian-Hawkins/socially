import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    RouterModule, 
    NgxSkeletonLoaderModule,
    MatButtonModule
],
  exports: [ButtonComponent],
})
export class ButtonModule {}