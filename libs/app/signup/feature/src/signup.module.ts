import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupPage } from './signup.page';
import { SignupRouting } from './signup.routing';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SignupRouting,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
  ],
  declarations: [SignupPage],
})
export class SignupModule { }
