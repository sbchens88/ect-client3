import { Router } from 'express';
import * as full1Controller from 'src/controllers/full1';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountFULL1(router: Router) {
    router.get(
        '/processa',
        validate(validators.Asdfg),
        respond((req: any) => full1Controller.Asdfg(Object.assign({}, req.params, req.body, req.query)))
    );
    router.get(
        '/process1',
        validate(validators.Asdfgasd),
        respond((req: any) => full1Controller.Asdfgasd(Object.assign({}, req.params, req.body, req.query)))
    );
}
