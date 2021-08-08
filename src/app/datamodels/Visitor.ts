export class Visitor {
  email: string;
  name: string;
  surname: string;
  phone: string;
  center: string;
  constructor(
    email: string,
    name: string,
    surname: string,
    phone: string,
    center: string) {
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.center = center;
  }
}
