import { Router } from 'express';
import * as asdwwController from 'src/controllers/asdww';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDWW(router: Router) {
    router.get(
        '/wwee',
        validate(validators.Qweccc),
        respond((req: any) => asdwwController.Qweccc(Object.assign({}, req.params, req.body, req.query)))
    );
}
