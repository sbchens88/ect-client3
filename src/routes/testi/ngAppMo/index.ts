import { Router } from 'express';
import * as ngAppMoController from 'src/controllers/ngAppMo';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountNGAPPMO(router: Router) {
    router.get(
        '/del',
        validate(validators.Mdosa),
        respond((req: any) => ngAppMoController.Mdosa(Object.assign({}, req.params, req.body, req.query)))
    );
}
