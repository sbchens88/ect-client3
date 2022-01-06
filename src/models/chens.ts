import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const WqrewtghMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface WqrewtghInput {}
export type WqrewtghOutputRecord = JSONObject;
export interface WqrewtghOutput extends Array<WqrewtghOutputRecord> {}
