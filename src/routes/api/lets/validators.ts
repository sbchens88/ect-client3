import { InputCheckChain } from 'src/types';
import { query } from "express-validator";
export const Wqegfd: InputCheckChain[] = [
                query('ik').isLength({ max: 15 }).optional().isNumeric().toFloat()
            ];

