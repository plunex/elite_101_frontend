import { Event } from "./event";
import { User } from "./user";

export interface Profile{
    id:number;
    name: string;
    email: string;
    phone: string;
    users: Array<User>;
    events: Array<Event>
}