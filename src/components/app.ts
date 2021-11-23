import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <div [class]="debugClasses">
      <div>
        <button (click)="debugUiView = !debugUiView">Toggle ui-view debug</button>
        <button (click)="debugUiSref= !debugUiSref">Toggle uiSref debug</button>
      </div>

      <div>
        <a uiSref="hello" uiSrefActive="active">Hello</a>
        <a uiSref="about" uiSrefActive="active">About</a>
        <a uiSref="people" uiSrefActive="active">People</a>
      </div>

      <ui-view></ui-view>
    </div>
  `
})
export class App {
  private debugUiView = false;
  private debugUiSref = false;
  get debugClasses() {
    const debugViewClass = this.debugUiView ? 'debug-ui-view' : '';
    const debugSrefClass = this.debugUiSref ? 'debug-ui-sref' : '';
    return `${debugViewClass} ${debugSrefClass}`;
  }
}
