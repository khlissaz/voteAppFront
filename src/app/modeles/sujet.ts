import { User } from './user';
export class Sujet {
    _id:string;
    titre: string;
    description: string;
    choix: number[]=[0,0];
    participants: number;
    user:User;
    
}
