import { Router } from 'express';
import * as apiyController from 'src/controllers/apiy';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountAPIY(router: Router) {
    router.get(
        '/amltest',
        validate(validators.Lfsbj),
        respond((req: any) => apiyController.Lfsbj(Object.assign({}, req.params, req.body, req.query)))
    );
}
