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
            comment: 'Input'
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
    Input?: number | string;
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
    Input: number;
}

/* eslint-enable */
