import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { simplecalcModel, simplecalcOutput, simplecalcInput } from 'src/models/MyPgmMod';

const logger = createLogger('controllers/lets');

export async function Wqegfd(inputs: JSONObject): Promise<simplecalcOutput> {
    logger.debug('Calling wqegfd');

    const params: simplecalcInput = {
        Input: inputs.ik
    };

    return transport.execute(simplecalcModel, params) as Promise<simplecalcOutput>;
}
