import { Router } from 'express';
import * as storedPrController from 'src/controllers/storedPr';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountSTOREDPR(router: Router) {
    router.get(
        '/ocedure',
        validate(validators.TestSpmodule),
        respond((req: any) => storedPrController.TestSpmodule(Object.assign({}, req.params, req.body, req.query)))
    );
}
