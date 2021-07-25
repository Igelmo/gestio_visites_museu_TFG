import {AssistantsType} from './AssistantsType';

export class Booking {
  name: string;
  surname: string;
  center: string;
  email: string;
  phone: string;
  assistants: number;
  assistantsType: AssistantsType;
  comments: string;

  constructor(name: string,
              surname: string,
              center: string,
              email: string,
              phone: string,
              assistants: string,
              assistantsType: string,
              comments: string) {
    this.name = name;
    this.surname = surname;
    this.center = center;
    this.email = email;
    this.phone = phone;
    let num = parseInt(assistants, 10);
    if (isNaN(num)) {
      num = 0;
    }
    this.assistants = num;
    this.assistantsType = assistantsType as unknown as AssistantsType;
    this.comments = comments;
  }

}
