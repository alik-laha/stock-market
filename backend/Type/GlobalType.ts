import * as string_decoder from "string_decoder";

export interface email{
    email:string,
    id:string
}

export interface signup{
    email:string,
    name:string,
    password:string,
    phoneNo:string
}

export interface login{
    email:string,
    password:string
}