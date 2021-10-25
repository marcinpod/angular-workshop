import { Directive, Input, ViewContainerRef } from '@angular/core';
import { PortalService } from './portal.service';

@Directive({
  selector: '[portalTarget]'
})
export class PortalTargetDirective {

  @Input('portalTarget') targetName: string = '';

  constructor(private viewContainerRef: ViewContainerRef, private portalService: PortalService) { }

  ngOnInit(): void {
    this.portalService.addTarget(this.targetName, this.viewContainerRef);
  }

}
