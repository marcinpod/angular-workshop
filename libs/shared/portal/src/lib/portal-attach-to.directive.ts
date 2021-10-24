import { Directive, DoCheck, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { PortalService } from './portal.service';

@Directive({
  selector: '[portalAttachTo]'
})
export class PortalAttachToDirective implements OnInit, DoCheck, OnDestroy {

  @Input('portalAttachTo') target: string = '';

  constructor(private templateRef: TemplateRef<any>, private portalService: PortalService) { }

  ngOnInit(): void {}

  ngDoCheck(): void {
    if (this.portalService.targetIsEmpty(this.target)) {
      this.portalService.attachToTarget(this.target, this.templateRef);
    }
  }

  ngOnDestroy(): void {
    this.portalService.clearTarget(this.target);
  }

}
