import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { TestSpmoduleMain, TestSpmoduleOutput, TestSpmoduleInput } from 'src/models/stored-pr';

const logger = createLogger('controllers/storedPr');

export async function TestSpmodule(inputs: JSONObject): Promise<TestSpmoduleOutput> {
    logger.debug('Calling testSpmodule with args: ', inputs);
    const params: TestSpmoduleInput = {
        param1: inputs.param1
    };
    return transport.execute(TestSpmoduleMain, params) as Promise<TestSpmoduleOutput>;
}
