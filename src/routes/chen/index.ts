import { Router } from 'express';
import mountAPIY from './apiy';

export default function mountCHEN(router: Router) {
    const apiy = Router();
    mountAPIY(apiy);
    router.use('/apiy', apiy);
}
