import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const WqedfgMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface WqedfgInput {}
export type WqedfgOutputRecord = JSONObject;
export interface WqedfgOutput extends Array<WqedfgOutputRecord> {}

export const WqedfgfMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface WqedfgfInput {}
export type WqedfgfOutputRecord = JSONObject;
export interface WqedfgfOutput extends Array<WqedfgfOutputRecord> {}
