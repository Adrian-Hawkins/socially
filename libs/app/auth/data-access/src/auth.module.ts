import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './auth.state';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([AuthState]), HttpClientModule],
})
export class AuthModule { }
