import {AssistantsType} from './AssistantsType';
import {Time} from '@angular/common';
import {Visitor} from './Visitor';

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
    assistantsType: string,
    comments: string) {
    this.requestedDay = requestedDay;
    this.requestedHour = requestedHour;
    this.visitor = visitor;
    let num = parseInt(assistants, 10);
    if (isNaN(num)) {
      num = 0;
    }
    this.assistants = num;
    this.assistantsType = assistantsType as unknown as AssistantsType;
    this.comments = comments;
  }

}
