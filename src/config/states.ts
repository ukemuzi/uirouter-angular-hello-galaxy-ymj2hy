import { Hello } from "../components/hello";
import { About } from "../components/about";
import { People } from "../components/people";
import { Person } from "../components/person";
import { PeopleService } from "../services/people";
import { Transition } from "@uirouter/core";

/** States */
export const helloState = { name: "hello", url: "/hello", component: Hello };

export const aboutState = { name: "about", url: "/about", component: About };

export const peopleState = {
  name: "people",
  url: "/people",
  component: People,
  resolve: [
    {
      token: "people",
      deps: [PeopleService],
      resolveFn: (peopleService: PeopleService) => peopleService.getAllPeople()
    }
  ]
};

export const personState = {
  name: "people.person",
  url: "/:personId",
  component: Person,
  resolve: [
    {
      token: "person",
      deps: [Transition, 'people'],
      resolveFn: (trans: Transition, people: any[]) => 
          people.find(person => person.id === trans.params().personId)
    }
  ]
};
