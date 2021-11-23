import { Component, Input } from "@angular/core";

@Component({
  template: `
    <h3>A person!</h3>

    <div>Name: {{ person.name }}</div>
    <div>Id: {{ person.id }}</div>
    <div>Company: {{ person.company }}</div>
    <div>Email: {{ person.email }}</div>
    <div>Address: {{ person.address }}</div>

    <button uiSref="people">Close</button>
  `
})
export class Person {
  @Input() person;
}
