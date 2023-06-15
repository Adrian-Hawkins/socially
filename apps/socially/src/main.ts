import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule } from '@socially/app/core/feature';

const ENVIRONMENT = process.env['NX_ENVIROMENT'] || 'dev';

if( ENVIRONMENT === 'dev' ) {
  console.log(`${process.env['NX_ENVIROMENT']}`);
  console.log(`${process.env['NX_AUTH0_DOMAIN']}`);
  console.log(`${process.env['NX_AUTH0_CLIENT_ID']}`);
  console.log(`${process.env['NX_AUTH0_CLIENT_SECRET']}`);
  console.log(`${process.env['NX_AUTH0_AUDIENCE']}`);
}

platformBrowserDynamic()
  .bootstrapModule(CoreModule)
  .catch((err) => console.error(err));
