import { InputCheckChain } from 'src/types';
import { query } from "express-validator";
export const Mdosa: InputCheckChain[] = [
                query('a').isLength({ max: 15 }).optional().isNumeric().toFloat()
            ];

