import {Request, Response} from 'express';
import { createSession, findSessions, updateSession } from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { signJwt } from '../utils/jwt.utils';
import config from 'config';


export async function createUserSessionHandler(req: Request, res: Response){

    // validate user's password
    const user = await validatePassword(req.body);

    if(!user){
        return res.status(401).send("Invalid email or password");
    }

    // create a session
    const session  = await createSession(user._id, req.get("user-agent") || "");

    // create an access token
    const accessToken = signJwt(
        { ...user, session: session._id },
        "accessTokenPrivateKey",
        { expiresIn: config.get("accessTokenTtl") } // 15 minutes,
      );
    
      // create a refresh token
      const refreshToken = signJwt(
        { ...user, session: session._id },
        "refreshTokenPrivateKey",
        { expiresIn: config.get("refreshTokenTtl") } // 1y
      );
    // return access and refresh tokens
    res.send({accessToken, refreshToken});
}

//get all sessions
export async function getUserSessionsHandler(req: Request, res: Response){
  const userId = res.locals.user;

  const sessions = await findSessions({user:userId, valid:true});
  return res.send(sessions);
}

// delete sessions
export async function deleteSessionHandler(req: Request, res: Response){
  const sessionId = res.locals.user.session; // safe to access if we put requireUser handler in front of this
  await updateSession({_id:sessionId}, {valid:false}); // user cannot use this session anymore
  return res.send({
    accessToken: null,
    refreshToken: null,
  });
}