import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { simplecalcModel, simplecalcOutput, simplecalcInput } from 'src/models/MyPgmMod';

const logger = createLogger('controllers/apiy');

export async function Lfsbj(inputs: JSONObject): Promise<simplecalcOutput> {
    logger.debug('Calling lfsbj');

    const params: simplecalcInput = {
        Input: inputs.inp
    };

    return transport.execute(simplecalcModel, params) as Promise<simplecalcOutput>;
}
