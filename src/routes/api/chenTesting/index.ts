import { Router } from 'express';
import * as chenTestingController from 'src/controllers/chenTesting';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountCHENTESTING(router: Router) {
    router.get(
        '/aTesta',
        validate(validators.Asdv),
        respond((req: any) => chenTestingController.Asdv(Object.assign({}, req.params, req.body, req.query)))
    );
}
