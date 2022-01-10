import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { simplecalcModel, simplecalcOutput, simplecalcInput } from 'src/models/MyPgmMod';

const logger = createLogger('controllers/ngAppMo');

export async function Mdosa(inputs: JSONObject): Promise<simplecalcOutput> {
    logger.debug('Calling mdosa');

    const params: simplecalcInput = {
        Input: inputs.a
    };

    return transport.execute(simplecalcModel, params) as Promise<simplecalcOutput>;
}
