import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { ApiqwerldffMain, ApiqwerldffOutput, ApiqwerldffInput } from 'src/models/api';

const logger = createLogger('controllers/api');

export async function Apiqwerldff(inputs: JSONObject): Promise<ApiqwerldffOutput> {
    logger.debug('Calling apiqwerldff with args: ', inputs);
    const params: ApiqwerldffInput = {};
    return transport.execute(ApiqwerldffMain, params) as Promise<ApiqwerldffOutput>;
}
