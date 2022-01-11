import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const SrxdtcfygvuhbjnMain = new eradaniConnect.run.Sql(`select * from qgpl.applications`);
export interface SrxdtcfygvuhbjnInput {}
export type SrxdtcfygvuhbjnOutputRecord = JSONObject;
export interface SrxdtcfygvuhbjnOutput extends Array<SrxdtcfygvuhbjnOutputRecord> {}
