import { Router } from 'express';
import mountNTESIN from './nTesin';

export default function mountCHE(router: Router) {
    const nTesin = Router();
    mountNTESIN(nTesin);
    router.use('/nTesin', nTesin);
}
