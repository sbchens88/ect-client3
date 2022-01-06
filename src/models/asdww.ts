import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwecccMain = new eradaniConnect.run.Sql(`select * from qgpl.applications`);
export interface QwecccInput {}
export type QwecccOutputRecord = JSONObject;
export interface QwecccOutput extends Array<QwecccOutputRecord> {}
