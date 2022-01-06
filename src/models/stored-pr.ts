import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const TestSpModuleMain = new eradaniConnect.run.SP(`sc_both`, {
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
export interface TestSpModuleInput {
    param1: number;
}
export type TestSpModuleOutputRecord = JSONObject;
export interface TestSpModuleOutput extends Array<TestSpModuleOutputRecord> {}
