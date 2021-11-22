import { Router } from 'express';
import * as chentest1122Controller from 'src/controllers/chentest1122';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountCHENTEST1122(router: Router) {
    router.get(
        '/test3',
        validate(validators.Asd),
        respond((req: any) => chentest1122Controller.Asd(Object.assign({}, req.params, req.body, req.query)))
    );
}
