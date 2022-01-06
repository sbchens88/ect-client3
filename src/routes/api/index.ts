import express, { Router } from 'express';
import mountRPG from './rpg';
import mountSQL from './sql';
import mountSTOREDPR from './storedPr';
import mountPOY from './poy';
import mountCHENS from './chens';
import mountCHENTESTING from './chenTesting';
import mountCHEN from './chen';
import mountASDS from './asds';

export default function mountAPI(router: Router) {
    // You can set auth requirements on a whole API section by putting `router.use(requireAuth);` here instead of on individual route definitions

    const rpg = express.Router();
    mountRPG(rpg);
    router.use('/rpg', rpg);

    const sql = express.Router();
    mountSQL(sql);
    router.use('/sql', sql);

    const storedPr = Router();
    mountSTOREDPR(storedPr);
    router.use('/storedPr', storedPr);

    const poy = Router();
    mountPOY(poy);
    router.use('/poy', poy);

    const chens = Router();
    mountCHENS(chens);
    router.use('/chens', chens);

    const chenTesting = Router();
    mountCHENTESTING(chenTesting);
    router.use('/chenTesting', chenTesting);

    const chen = Router();
    mountCHEN(chen);
    router.use('/chen', chen);

    const asds = Router();
    mountASDS(asds);
    router.use('/asds', asds);
}
