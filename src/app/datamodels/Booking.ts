import {AssistantsType} from './AssistantsType';
import {Visitor} from './Visitor';

export class Booking {
  requestedDateTime: string;
  visitor: Visitor;
  assistants: number;
  assistantsType: AssistantsType;
  comments: string;

  constructor(
    requestedDateTime: string,
    visitor: Visitor,
    assistants: string,
    assistantsType: AssistantsType,
    comments: string) {
    this.requestedDateTime = requestedDateTime;
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
