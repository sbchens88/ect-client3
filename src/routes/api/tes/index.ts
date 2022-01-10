import { Router } from 'express';
import * as tesController from 'src/controllers/tes';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountTES(router: Router) {
    router.get(
        '/stingf',
        validate(validators.Sadfff),
        respond((req: any) => tesController.Sadfff(Object.assign({}, req.params, req.body, req.query)))
    );
}
