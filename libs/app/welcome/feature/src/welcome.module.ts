import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRouting } from './welcome.routing';
import { WelcomePage } from './welcome.page';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule, 
    WelcomeRouting,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  declarations: [WelcomePage],
})
export class WelcomeModule {}
