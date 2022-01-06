import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const AsdfgMain = new eradaniConnect.run.SP(`spName`);
export interface AsdfgInput {}
export type AsdfgOutputRecord = JSONObject;
export interface AsdfgOutput extends Array<AsdfgOutputRecord> {}

export const AsdfgasdMain = new eradaniConnect.run.SP(`spName`);
export interface AsdfgasdInput {}
export type AsdfgasdOutputRecord = JSONObject;
export interface AsdfgasdOutput extends Array<AsdfgasdOutputRecord> {}

export const AsdfgasdedsdaMain = new eradaniConnect.run.SP(`spName`);
export interface AsdfgasdedsdaInput {}
export type AsdfgasdedsdaOutputRecord = JSONObject;
export interface AsdfgasdedsdaOutput extends Array<AsdfgasdedsdaOutputRecord> {}
