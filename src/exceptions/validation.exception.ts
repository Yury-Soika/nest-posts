import { BadRequestException } from '@nestjs/common';

export class ValidationException extends BadRequestException {
  messages;

  constructor(response) {
    super(response);
    this.messages = response;
  }
}
