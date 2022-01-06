import { Router } from 'express';
import * as chenController from 'src/controllers/chen';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountCHEN(router: Router) {
    router.get(
        '/tesing123',
        validate(validators.Wqedc),
        respond((req: any) => chenController.Wqedc(Object.assign({}, req.params, req.body, req.query)))
    );
}
