import { Router } from 'express';
import * as newestController from 'src/controllers/newest';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountNEWEST(router: Router) {
    router.get(
        '/testingMonaco',
        validate(validators.Wqedfg),
        respond((req: any) => newestController.Wqedfg(Object.assign({}, req.params, req.body, req.query)))
    );
    router.get(
        '/testingMonaco2',
        validate(validators.Wqedfgf),
        respond((req: any) => newestController.Wqedfgf(Object.assign({}, req.params, req.body, req.query)))
    );
    router.get(
        '/testingMonaco3',
        validate(validators.Wqedfgf2),
        respond((req: any) => newestController.Wqedfgf2(Object.assign({}, req.params, req.body, req.query)))
    );
}
