import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const ApiqwerldffMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface ApiqwerldffInput {}
export type ApiqwerldffOutputRecord = JSONObject;
export interface ApiqwerldffOutput extends Array<ApiqwerldffOutputRecord> {}
