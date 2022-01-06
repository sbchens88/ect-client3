import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QewrtghfMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface QewrtghfInput {}
export type QewrtghfOutputRecord = JSONObject;
export interface QewrtghfOutput extends Array<QewrtghfOutputRecord> {}
