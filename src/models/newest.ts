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

export const Wqedfgf2Main = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface Wqedfgf2Input {}
export type Wqedfgf2OutputRecord = JSONObject;
export interface Wqedfgf2Output extends Array<Wqedfgf2OutputRecord> {}

export const Wqedfgf4Main = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface Wqedfgf4Input {}
export type Wqedfgf4OutputRecord = JSONObject;
export interface Wqedfgf4Output extends Array<Wqedfgf4OutputRecord> {}
