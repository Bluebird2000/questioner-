import { BaseService } from "./baseservice";
import { NextFunction, Request, Response } from "express";

export class ApiIndexService extends BaseService {

    public async apiIndex(req: Request, res: Response, next: NextFunction) {
        res.status(200).send({
            status: 'SUCCESS',
            data: `questioner- Encryption at rest API that provides data to questioner's- client. Questioner is a crowd-source questions for meetups which helps people interact with one another, It helps share great times with wonderful experience.`
        });
    }
    
}
