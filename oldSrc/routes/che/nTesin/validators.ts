import { InputCheckChain } from 'src/types';
import { query } from "express-validator";
export const CheckSProcedure: InputCheckChain[] = [
                    
                
                    query('fp').isString()
                ]

