import { Component, Input } from "@angular/core";

@Component({
  template: `
    <!-- outer container -->
    <div class="flex-h">
      <!-- inner container for people -->
      <div class="people">
        <h3>Some people:</h3>
        <ul>
          <li *ngFor="let person of people">
            <a uiSref=".person" [uiParams]="{ personId: person.id }" uiSrefActive="active">
              {{ person.name }}
            </a>
          </li>
        </ul>
      </div>

      <!-- viewport for child view -->
      <ui-view></ui-view>
    </div>
  `
})
export class People {
  @Input() people;
}
