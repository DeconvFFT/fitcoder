import {DocumentDefinition} from 'mongoose';
import userModel,{UserDocument } from '../models/user.model';

export async function createUser(input: DocumentDefinition<UserDocument>){
    try{
        return await userModel.create(input);
    }catch(err:any){
        throw new Error(err);
    }
}