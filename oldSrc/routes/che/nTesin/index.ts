import { Router } from 'express';
import * as nTesinController from 'src/controllers/nTesin';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
import * as nTesinController from 'src/controllers/ntesin';

export default function mountNTESIN(router: Router) {
    router.get(
        '/gStoredP',
        validate(validators.CheckSProcedure),
        respond((req: any) => nTesinController.CheckSProcedure(Object.assign({}, req.params, req.body, req.query)))
    );
}
