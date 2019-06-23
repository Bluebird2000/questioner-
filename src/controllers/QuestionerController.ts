import { NextFunction, Request, Response, Router } from "express";
import { BaseController } from "./BaseController";
import { ApiIndexService } from '../services/ApiIndex';


export class QuestionerController extends BaseController {

  public loadRoutes(prefix: String, router: Router) {
    this.apiIndex(prefix, router);

  }

  public apiIndex(prefix: String, router: Router): any {
    router.get(prefix + "/", (req: Request, res: Response, next: NextFunction) => {
      new ApiIndexService().apiIndex(req, res, next);

    });
  }


  public authorize(req: Request, res: Response, next: NextFunction) {
    if (!this.authorized(req, res, next)) {
      this.sendError(req, res, next, this.notAuthorized);
    } else {
      next();
    }

  }

  constructor() {
    super();
  }
}