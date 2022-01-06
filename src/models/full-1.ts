import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const AsdfgMain = new eradaniConnect.run.SP(`spName`);
export interface AsdfgInput {}
export type AsdfgOutputRecord = JSONObject;
export interface AsdfgOutput extends Array<AsdfgOutputRecord> {}
