import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SharedUiLayoutModule } from '@angular-workshop/shared/ui/layout';
import { ClientShellUiNavbarModule } from '@angular-workshop/client/shell/ui/navbar';
import { ClientShellUiSidenavModule } from '@angular-workshop/client/shell/ui/sidenav';

@NgModule({
  imports: [
    CommonModule,
    SharedUiLayoutModule,
    ClientShellUiNavbarModule,
    ClientShellUiSidenavModule
  ],
  declarations: [
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ],
})
export class ClientShellUiLayoutModule {}
