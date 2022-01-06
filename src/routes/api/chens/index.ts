import { Router } from 'express';
import * as chensController from 'src/controllers/chens';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountCHENS(router: Router) {
    router.get(
        '/possf',
        validate(validators.Wqrewtgh),
        respond((req: any) => chensController.Wqrewtgh(Object.assign({}, req.params, req.body, req.query)))
    );
}
