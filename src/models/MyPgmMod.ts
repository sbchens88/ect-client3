/* eslint-disable */
// @ts-nocheck
// Module: MyPgmMod
// Generated source -- do not modify

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

// Manually entered import
import configService from '../../config';
const config = configService.get();

/**
 * Program model
 */
export const simplecalcModel = new eradaniConnect.run.Pgm('SIMPLECALC', {
    lib: 'AMAGID_X',
    mode: 'ile',
    params: [
        {
            name: 'Input',
            type: new dataTypes.PackedDecimal(15, 0),
            defaultValue: 0.0,
            comment: 'Input',
            dim: 3
        },
        {
            name: 'Param1',
            type: new dataTypes.PackedDecimal(15, 3),
            defaultValue: 0.0,
            comment: 'Input'
        },
        {
            name: 'Output',
            type: new dataTypes.PackedDecimal(16, 0),
            outputOnly: true
        }
    ]
});

/**
 * Input interface
 */
export interface simplecalcInput {
    /**
     * @description Input
     * @size 15 digits
     * @precision 0 decimals
     * @default `0`
     */
    Input?: Array<number | string>;
    /**
     * @description Input
     * @size 15 digits
     * @precision 3 decimals
     * @default `0`
     */
    Param1?: number | string;
    /**
     * @size 16 digits
     * @precision 0 decimals
     */
    Output?: never;
}

/**
 * Output interface
 */
export interface simplecalcOutput {
    /**
     * @description Input
     * @size 15 digits
     * @precision 0 decimals
     * @default `0`
     */
    Input: Array<number>;
    /**
     * @description Input
     * @size 15 digits
     * @precision 3 decimals
     * @default `0`
     */
    Param1: number;
    /**
     * @size 16 digits
     * @precision 0 decimals
     */
    Output: number;
}

/* eslint-enable */
