import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwedddwwwMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface QwedddwwwInput {}
export type QwedddwwwOutputRecord = JSONObject;
export interface QwedddwwwOutput extends Array<QwedddwwwOutputRecord> {}
