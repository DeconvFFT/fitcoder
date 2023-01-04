import { FilterQuery, UpdateQuery } from "mongoose";
import {get} from 'lodash';
import sessionModel, { SessionDocument } from "../models/session.model";
import { signJwt, verifyJwt } from "../utils/jwt.utils";
import { findUser } from "./user.service";
import config from "config";
import { access } from "fs";
export async function createSession(userId: string, userAgent: string){
    const session = await sessionModel.create({user:userId, userAgent});
    return session.toJSON();
}

export async function findSessions(query: FilterQuery<SessionDocument>){
    return sessionModel.find(query).lean(); // returns only object without all functions
}

// updating session
export async function updateSession(
    query:  FilterQuery<SessionDocument>,
    update: UpdateQuery<SessionDocument>
    ){
        return sessionModel.updateOne(query, update);
}

// re-issuing access token
export async function reIssueAccessToken({
    refreshToken,
  }: {
    refreshToken: string;
  }) {
    const {decoded} = verifyJwt(refreshToken, "refreshTokenPublicKey");
    if (!decoded || !get(decoded, '_id')){
        return false
    }

    const session = await sessionModel.findById(get(decoded, 'session'));
    if(!session || !session.valid){
        return false;
    }

    const user = await findUser({_id:session.user});
    if(!user){
        return false;
    }
     // reissue an access token
    const accessToken = signJwt(
        { ...user, session: session._id },
        "accessTokenPrivateKey",
        { expiresIn: config.get("accessTokenTtl") } // 15 minutes,
      );
    
      return accessToken;
}