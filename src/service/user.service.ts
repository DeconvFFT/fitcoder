import {DocumentDefinition} from 'mongoose';
import userModel,{UserDocument } from '../models/user.model';

export async function createUser(input: DocumentDefinition<Omit<UserDocument, 'createdAt'|'updatedAt'|'comparePassword'>>
){
    try{
        return await userModel.create(input);
    }catch(err:any){
        throw new Error(err);
    }
}