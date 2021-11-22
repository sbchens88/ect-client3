import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { simplecalcModel, simplecalcOutput, simplecalcInput } from 'src/models/MyPgmMod';

const logger = createLogger('controllers/chentest1122');

export async function Asd(inputs: JSONObject): Promise<simplecalcOutput> {
    logger.debug('Calling asd');

    const params: simplecalcInput = {
        Input: inputs.in,
        Param1: inputs.Param1,
        Output: inputs.Output
    };

    return transport.execute(simplecalcModel, params) as Promise<simplecalcOutput>;
}
