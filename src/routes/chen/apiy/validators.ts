import { InputCheckChain } from 'src/types';
import { query } from "express-validator";
export const Lfsbj: InputCheckChain[] = [
                query('inp').isLength({ max: 15 }).optional().isNumeric().toFloat()
            ];

