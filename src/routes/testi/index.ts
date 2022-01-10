import { Router } from 'express';
import mountNGAPPMO from './ngAppMo';

export default function mountTESTI(router: Router) {
    const ngAppMo = Router();
    mountNGAPPMO(ngAppMo);
    router.use('/ngAppMo', ngAppMo);
}
