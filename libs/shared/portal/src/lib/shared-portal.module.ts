import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalTargetDirective } from './portal-target.directive';
import { PortalAttachToDirective } from './portal-attach-to.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PortalTargetDirective,
    PortalAttachToDirective
  ],
  exports: [
    PortalTargetDirective,
    PortalAttachToDirective
  ],
})
export class SharedPortalModule {}
