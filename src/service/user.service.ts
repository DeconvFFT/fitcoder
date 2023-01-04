import {DocumentDefinition, FilterQuery} from 'mongoose';
import userModel,{UserDocument } from '../models/user.model';
import {omit} from 'lodash';

// create user
export async function createUser(input: DocumentDefinition<Omit<UserDocument, 'createdAt'|'updatedAt'|'comparePassword'>>
){
    try{
        const user = await userModel.create(input);
        return omit(user.toJSON(), 'password');
    }catch(err:any){
        throw new Error(err);
    }
}
// validate password
export async function validatePassword({email,password}: {email:string, password:string}){
    const user = await userModel.findOne({email});
    if(!user){
        return false;
    }

    const isValid = await user.comparePassword(password);
    if(!isValid){
        return false;
    }
    return omit(user.toJSON(), 'password');

}

// find user
export async function findUser(query:FilterQuery<UserDocument>){
    return userModel.findOne(query).lean();
}