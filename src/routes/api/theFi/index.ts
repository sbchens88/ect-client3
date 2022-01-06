import { Router } from 'express';
import * as theFiController from 'src/controllers/theFi';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountTHEFI(router: Router) {
    router.get(
        '/nalProc',
        validate(validators.Asdfb),
        respond((req: any) => theFiController.Asdfb(Object.assign({}, req.params, req.body, req.query)))
    );
}
