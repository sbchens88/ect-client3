import { Router } from 'express';
import mountAPIE from './apie';

export default function mountCHE(router: Router) {
    const apie = Router();
    mountAPIE(apie);
    router.use('/apie', apie);
}
