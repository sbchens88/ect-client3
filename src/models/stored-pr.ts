import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const TestSpmoduleMain = new eradaniConnect.run.SP(`sc_both`, {
    lib: 'ecncttest',
    params: [
        { name: 'param1' },
        {
            name: 'param1',
            outputOnly: true,
            defaultValue: '10'
        }
    ]
});
export interface TestSpmoduleInput {
    param1: number;
}
export type TestSpmoduleOutputRecord = JSONObject;
export interface TestSpmoduleOutput extends Array<TestSpmoduleOutputRecord> {}
