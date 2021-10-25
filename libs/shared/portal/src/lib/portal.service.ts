import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  private targets: Map<string, ViewContainerRef>;

  constructor() {
    this.targets = new Map<string, ViewContainerRef>();
  }

  addTarget(targetName: string, vcr: ViewContainerRef): void {
    this.targets.set(targetName, vcr);
  }

  attachToTarget(targetName: string, templateRef: TemplateRef<any>): void {
    this.getTarget(targetName)?.createEmbeddedView(templateRef);
  }

  clearTarget(targetName: string): void {
    this.getTarget(targetName)?.clear();
  }

  targetIsEmpty(targetName: string): boolean {
    return this.getTarget(targetName)?.length === 0;
  }

  private getTarget(targetName: string): ViewContainerRef | null {
    return this.targets.has(targetName) ? this.targets.get(targetName) : null;
  }

}
