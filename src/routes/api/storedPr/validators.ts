import { InputCheckChain } from 'src/types';
import { body } from "express-validator";
export const TestSpModule: InputCheckChain[] = [
                    
                
                    body('param1').isNumeric()
                ]

