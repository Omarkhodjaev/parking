import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor() {
    super('User not found', HttpStatus.NOT_FOUND);
  }
}

export class UserPhoneNotFoundException extends HttpException {
  constructor() {
    super('User phone number not found', HttpStatus.NOT_FOUND);
  }
}

export class UserPhoneAlreadyException extends HttpException {
  constructor() {
    super('User phone number already exist', HttpStatus.NOT_FOUND);
  }
}

export class UserAlreadyExistException extends HttpException {
  constructor() {
    super('User already exist', HttpStatus.BAD_REQUEST);
  }
}
