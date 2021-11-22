import { Router } from 'express';
import * as chentest1122Controller from 'src/controllers/chentest11_22';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
import * as chentest1122Controller from 'src/controllers/chentest_1122';

export default function mountCHENTEST11_22(router: Router) {
    router.get(
        '/test3',
        validate(validators.Asdfgbv),
        respond((req: any) => chentest1122Controller.Asdfgbv(Object.assign({}, req.params, req.body, req.query)))
    );
}
