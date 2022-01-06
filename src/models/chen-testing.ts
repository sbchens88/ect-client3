import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const AsdvMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface AsdvInput {}
export type AsdvOutputRecord = JSONObject;
export interface AsdvOutput extends Array<AsdvOutputRecord> {}
