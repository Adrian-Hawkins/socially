import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreRouting } from './core.routing';
import { CoreShell } from './core.shell';
import { AuthModule } from '@auth0/auth0-angular';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [CoreShell],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreRouting,
    NoopAnimationsModule,
    AuthModule.forRoot({
      domain: `${process.env['NX_AUTH0_DOMAIN']}`,
      clientId: `${process.env['NX_AUTH0_CLIENT_ID']}`,
    }),
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  bootstrap: [CoreShell],
})
export class CoreModule {}
