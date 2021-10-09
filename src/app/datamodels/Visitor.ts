import {Person} from './Person';

export class Visitor {
  visitorEmail: string;
  person: Person;
  center: string;
  constructor(
    email: string,
    person: Person,
    center: string) {
    this.visitorEmail = email;
    this.person = person;
    this.center = center;
  }
}
