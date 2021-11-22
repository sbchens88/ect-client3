import { InputCheckChain } from 'src/types';
import { query,check } from "express-validator";
export const Asd: InputCheckChain[] = [
                query('in').isLength({ max: 15 }).optional().isArray(),check('Param1').isLength({ max: 16 }).optional().isNumeric().toFloat(),check('Output').not().exists().withMessage('param is not allowed')
            ];

