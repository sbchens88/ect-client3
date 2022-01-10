import express, { Router } from 'express';
import mountRPG from './rpg';
import mountSQL from './sql';
import mountNEWEST from './newest';
import mountTES from './tes';
import mountANOTH from './anoth';
import mountLETS from './lets';

export default function mountAPI(router: Router) {
    // You can set auth requirements on a whole API section by putting `router.use(requireAuth);` here instead of on individual route definitions

    const rpg = express.Router();
    mountRPG(rpg);
    router.use('/rpg', rpg);

    const sql = express.Router();
    mountSQL(sql);
    router.use('/sql', sql);

    const newest = Router();
    mountNEWEST(newest);
    router.use('/newest', newest);

    const tes = Router();
    mountTES(tes);
    router.use('/tes', tes);

    const anoth = Router();
    mountANOTH(anoth);
    router.use('/anoth', anoth);

    const lets = Router();
    mountLETS(lets);
    router.use('/lets', lets);
}
