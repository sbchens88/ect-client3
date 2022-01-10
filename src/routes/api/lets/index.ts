import { Router } from 'express';
import * as letsController from 'src/controllers/lets';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountLETS(router: Router) {
    router.get(
        '/testt',
        validate(validators.Wqegfd),
        respond((req: any) => letsController.Wqegfd(Object.assign({}, req.params, req.body, req.query)))
    );
}
