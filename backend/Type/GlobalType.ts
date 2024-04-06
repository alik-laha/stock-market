
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

export interface Verify{
    id:string,
    email:string,
    iat:number,
    exp:number
}

export interface cookie{
    token:string,
    verify:string
}