import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { simplecalcModel, simplecalcOutput, simplecalcInput } from 'src/models/MyPgmMod';

const logger = createLogger('controllers/tes');

export async function Sadfff(inputs: JSONObject): Promise<simplecalcOutput> {
    logger.debug('Calling sadfff');

    const params: simplecalcInput = {
        Input: inputs.in1
    };

    return transport.execute(simplecalcModel, params) as Promise<simplecalcOutput>;
}
