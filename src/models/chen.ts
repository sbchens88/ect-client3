import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const WqedcMain = new eradaniConnect.run.Sql(`select * from qgpl.appliations`);
export interface WqedcInput {}
export type WqedcOutputRecord = JSONObject;
export interface WqedcOutput extends Array<WqedcOutputRecord> {}
