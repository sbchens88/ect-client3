import { Router } from 'express';
import * as anothController from 'src/controllers/anoth';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountANOTH(router: Router) {
    router.get(
        '/ertest',
        validate(validators.Wqefgbl),
        respond((req: any) => anothController.Wqefgbl(Object.assign({}, req.params, req.body, req.query)))
    );
}
