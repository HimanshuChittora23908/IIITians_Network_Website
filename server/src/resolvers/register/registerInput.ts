import { Length, IsEmail } from 'class-validator'
import { InputType, Field } from 'type-graphql';
import { IsEmailAlreadyExist } from './isEmailAlreadyExist';
import { IsUsernameAlreadyExist } from './isUsernameAlreadyExist';

@InputType()
export class RegisterInput {

  @Field() 
  @Length(1,255)
  @IsUsernameAlreadyExist({ message: "Username already exists" })
  username: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({ message: "Email already exists!" })
  email: string

  @Field() 
  @Length(8,150)
  password: string

}