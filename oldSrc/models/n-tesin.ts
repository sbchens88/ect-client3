import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const CheckSProcedureMain = new eradaniConnect.run.SP(`sc_both`, {
    lib: 'ecncttest',
    params: [
        { name: 'fp' },
        {
            name: 'param1',
            outputOnly: true,
            defaultValue: ' 10'
        }
    ]
});
export interface CheckSProcedureInput {
    fp: string;
}
export type CheckSProcedureOutputRecord = JSONObject;
export interface CheckSProcedureOutput extends Array<CheckSProcedureOutputRecord> {}
