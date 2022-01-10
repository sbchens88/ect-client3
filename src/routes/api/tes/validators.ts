import { InputCheckChain } from 'src/types';
import { query } from "express-validator";
export const Sadfff: InputCheckChain[] = [
                query('in1').isLength({ max: 15 }).optional().isNumeric().toFloat()
            ];

