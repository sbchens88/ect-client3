import { Router } from 'express';
import * as asdsController from 'src/controllers/asds';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDS(router: Router) {
    router.get(
        '/ssddd',
        validate(validators.Qwedc),
        respond((req: any) => asdsController.Qwedc(Object.assign({}, req.params, req.body, req.query)))
    );
}
