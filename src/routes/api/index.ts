import express, { Router } from 'express';
import mountRPG from './rpg';
import mountSQL from './sql';
import mountSTOREDPR from './storedPr';
import mountPOY from './poy';
import mountCHENS from './chens';
import mountCHENTESTING from './chenTesting';
import mountCHEN from './chen';
import mountASDS from './asds';
import mountCHENTESTING13 from './chenTesting13';
import mountFULL1 from './full1';
import mountTHEFI from './theFi';
import mountASDWW from './asdww';
import mountQWEWWW from './qwewww';
import mountAPI from './api';

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

    const chenTesting13 = Router();
    mountCHENTESTING13(chenTesting13);
    router.use('/chenTesting13', chenTesting13);

    const full1 = Router();
    mountFULL1(full1);
    router.use('/full1', full1);

    const theFi = Router();
    mountTHEFI(theFi);
    router.use('/theFi', theFi);

    const asdww = Router();
    mountASDWW(asdww);
    router.use('/asdww', asdww);

    const qwewww = Router();
    mountQWEWWW(qwewww);
    router.use('/qwewww', qwewww);

    const api = Router();
    mountAPI(api);
    router.use('/api', api);
}
