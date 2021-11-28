import { InputCheckChain } from 'src/types';
import { body } from "express-validator";
export const TestSpmodule: InputCheckChain[] = [
                    
                
                    body('param1').isNumeric()
                ]

