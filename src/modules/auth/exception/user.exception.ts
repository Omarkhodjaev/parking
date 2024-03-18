import { HttpException, HttpStatus } from '@nestjs/common';

export class UserPhoneOrPassException extends HttpException {
  constructor() {
    super('Phone number or password wrong', HttpStatus.BAD_REQUEST);
  }
}
