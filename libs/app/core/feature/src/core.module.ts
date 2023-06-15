import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreRouting } from './core.routing';
import { CoreShell } from './core.shell';
import { AuthModule } from '@auth0/auth0-angular';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [CoreShell],
  imports: [
    BrowserModule,
    CoreRouting,
    NoopAnimationsModule,
    AuthModule.forRoot({
      domain: `${process.env['NX_AUTH0_DOMAIN']}`,
      clientId: `${process.env['NX_AUTH0_CLIENT_ID']}`,
    })
  ],
  bootstrap: [CoreShell],
})
export class CoreModule {}
