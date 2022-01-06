import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { TestSpModuleMain, TestSpModuleOutput, TestSpModuleInput } from 'src/models/stored-pr';

const logger = createLogger('controllers/storedPr');

export async function TestSpModule(inputs: JSONObject): Promise<TestSpModuleOutput> {
    logger.debug('Calling testSpModule with args: ', inputs);
    const params: TestSpModuleInput = {
        param1: inputs.param1
    };
    return transport.execute(TestSpModuleMain, params) as Promise<TestSpModuleOutput>;
}
