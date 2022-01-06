import { Router } from 'express';
import * as chenTesting13Controller from 'src/controllers/chenTesting13';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountCHENTESTING13(router: Router) {
    router.get(
        '/epSample',
        validate(validators.Qewrtghf),
        respond((req: any) => chenTesting13Controller.Qewrtghf(Object.assign({}, req.params, req.body, req.query)))
    );
}
