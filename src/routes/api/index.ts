import express, { Router } from 'express';
import mountRPG from './rpg';
import mountSQL from './sql';
import mountCHENTEST11_22 from './chentest11_22';

export default function mountAPI(router: Router) {
    // You can set auth requirements on a whole API section by putting `router.use(requireAuth);` here instead of on individual route definitions

    const rpg = express.Router();
    mountRPG(rpg);
    router.use('/rpg', rpg);

    const sql = express.Router();
    mountSQL(sql);
    router.use('/sql', sql);

    const chentest11_22 = Router();
    mountCHENTEST11_22(chentest11_22);
    router.use('/chentest11-22', chentest11_22);
}
