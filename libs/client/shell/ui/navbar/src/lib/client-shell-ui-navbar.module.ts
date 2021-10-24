import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedPortalModule } from '@angular-workshop/shared/portal';

@NgModule({
  imports: [
    CommonModule,
    SharedPortalModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
})
export class ClientShellUiNavbarModule {}
