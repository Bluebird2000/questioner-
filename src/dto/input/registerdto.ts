import {IsEmail, IsNotEmpty, MinLength, MaxLength, IsNumberString,  IsOptional, Length} from "class-validator";

export class RegisterUserDTO {
 
    @MinLength(3)
    @MaxLength(30)
    @IsNotEmpty({
        message: 'firstName is required'
    })
    firstName: string;

    @MinLength(3)
    @MaxLength(30)
    @IsNotEmpty({
        message: 'lastName is required'
    })
    lastName: string;

    @IsEmail()
    @IsNotEmpty({
        message: 'email is required'
    })
    email: string;

    @MinLength(5)
    @IsNotEmpty({
        message: 'password is required'
    })
    password: string;

    @IsNumberString()
    @IsOptional()
    @Length(11, 11)
    phoneNumber: string;


    constructor(firstName?: string, lastName?: string, email?: string, password?: string, phoneNumber?:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
}