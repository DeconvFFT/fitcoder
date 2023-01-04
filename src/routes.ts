import {Express, Request, Response} from 'express';
import { createUserSessionHandler, deleteSessionHandler, getUserSessionsHandler } from './controller/session.controller';
import { createUserHandler } from './controller/user.controller';
import requireUser from './middleware/requireUser';
import validateResource from './middleware/validateResource';
import { createSessionSchema } from './schema/session.schema';
import { createUserSchema } from './schema/user.schema';

function routes(app: Express){
    app.get('/healthcheck', (req: Request, res: Response) => {
        res.sendStatus(200);
    });

    // create a new user
    app.post('/api/users', validateResource(createUserSchema),createUserHandler);

    // create a new session
    app.post('/api/sessions', validateResource(createSessionSchema),createUserSessionHandler);

    // get session
    app.get('/api/sessions', requireUser, getUserSessionsHandler);

    // delete session
    app.delete('/api/sessions', requireUser, deleteSessionHandler);
}

export default routes;


