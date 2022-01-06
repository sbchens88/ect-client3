import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const AsdfbMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface AsdfbInput {}
export type AsdfbOutputRecord = JSONObject;
export interface AsdfbOutput extends Array<AsdfbOutputRecord> {}
