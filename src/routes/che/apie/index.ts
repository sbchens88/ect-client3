import { Router } from 'express';
import * as apieController from 'src/controllers/apie';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountAPIE(router: Router) {
    router.get(
        '/ndpoint',
        validate(validators.Srxdtcfygvuhbjn),
        respond((req: any) => apieController.Srxdtcfygvuhbjn(Object.assign({}, req.params, req.body, req.query)))
    );
}
