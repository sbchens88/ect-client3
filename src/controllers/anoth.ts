import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { simplecalcModel, simplecalcOutput, simplecalcInput } from 'src/models/MyPgmMod';

const logger = createLogger('controllers/anoth');

export async function Wqefgbl(inputs: JSONObject): Promise<simplecalcOutput> {
    logger.debug('Calling wqefgbl');

    const params: simplecalcInput = {
        Input: inputs.in
    };

    return transport.execute(simplecalcModel, params) as Promise<simplecalcOutput>;
}
