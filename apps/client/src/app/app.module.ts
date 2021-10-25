import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ClientShellFeatureModule } from '@angular-workshop/client/shell/feature';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    ClientShellFeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
