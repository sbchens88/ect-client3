import { Router } from 'express';
import * as poyController from 'src/controllers/poy';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountPOY(router: Router) {
    router.get(
        '/hg',
        validate(validators.Qwe),
        respond((req: any) => poyController.Qwe(Object.assign({}, req.params, req.body, req.query)))
    );
}
