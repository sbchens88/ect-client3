import { InputCheckChain } from 'src/types';
import { query } from "express-validator";
export const Wqefgbl: InputCheckChain[] = [
                query('in').isLength({ max: 15 }).optional().isNumeric().toFloat()
            ];

