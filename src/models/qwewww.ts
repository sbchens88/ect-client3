import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwedddwwwMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface QwedddwwwInput {}
export type QwedddwwwOutputRecord = JSONObject;
export interface QwedddwwwOutput extends Array<QwedddwwwOutputRecord> {}

export const Qwedddwww1Main = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface Qwedddwww1Input {}
export type Qwedddwww1OutputRecord = JSONObject;
export interface Qwedddwww1Output extends Array<Qwedddwww1OutputRecord> {}

export const Qwedddwww2Main = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface Qwedddwww2Input {}
export type Qwedddwww2OutputRecord = JSONObject;
export interface Qwedddwww2Output extends Array<Qwedddwww2OutputRecord> {}
