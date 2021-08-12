import {AssistantsType} from './AssistantsType';
import {Visitor} from './Visitor';
import {Observable} from 'rxjs';

export class Booking {
  requestedDay: string;
  requestedHour: string;
  visitor: Visitor;
  assistants: number;
  assistantsType: AssistantsType;
  comments: string;

  constructor(
    requestedDay: string,
    requestedHour: string,
    visitor: Visitor,
    assistants: string,
    assistantsType: AssistantsType,
    comments: string) {
    this.requestedDay = requestedDay;
    this.requestedHour = requestedHour;
    this.visitor = visitor;
    let num = parseInt(assistants, 10);
    if (isNaN(num)) {
      num = 0;
    }
    this.assistants = num;
    this.assistantsType = assistantsType;
    this.comments = comments;
  }


}
