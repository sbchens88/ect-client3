import { Router } from 'express';
import * as qwewwwController from 'src/controllers/qwewww';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountQWEWWW(router: Router) {
    router.get(
        '/wwwwwq',
        validate(validators.Qwedddwww),
        respond((req: any) => qwewwwController.Qwedddwww(Object.assign({}, req.params, req.body, req.query)))
    );
}
