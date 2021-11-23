import "./polyfills";
import "./styles.css";

import { NgModule, Component } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { UIRouterModule } from "@uirouter/angular";

import { App } from "./components/app";
import { Hello } from "./components/hello";
import { About } from "./components/about";
import { People } from "./components/people";
import { Person } from "./components/person";
import { PeopleService } from "./services/people";
import { uiRouterConfigFn } from "./config/router.config";
import { helloState, aboutState, peopleState, personState } from "./config/states";

const INITIAL_STATES = [helloState, aboutState, peopleState, personState];
let INITIAL_COMPONENTS = [App, Hello, About, People, Person];

/** Angular 2 bootstrap */
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    UIRouterModule.forRoot({
      states: INITIAL_STATES,
      useHash: true,
      config: uiRouterConfigFn
    })
  ],
  providers: [{ provide: PeopleService, useClass: PeopleService }],
  declarations: INITIAL_COMPONENTS,
  bootstrap: [App]
})
class HelloSolarSystemModule {}

platformBrowserDynamic().bootstrapModule(HelloSolarSystemModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));
