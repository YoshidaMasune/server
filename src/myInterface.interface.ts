import { Request } from "express";

export interface UserInterface {
    first_name: string,
    last_name: string,
    phone: string
}

export interface WorkInterface {
    work_name: string;
    monk: number;
    location: string;
    date_time: string;
    detail: string;
}

export interface AddressInterface {
    house: string,
    village: string,
    sub_district: string,
    district: string,
    province: string,
    detail: string
}

export interface AddressInterface {
    
}
export interface WorkRequest extends Request {
    body: {
        user: UserInterface,
        work: WorkInterface,
        address?: AddressInterface
    }
}