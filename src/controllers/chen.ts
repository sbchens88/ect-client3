import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { WqedcMain, WqedcOutput, WqedcInput } from 'src/models/chen';

const logger = createLogger('controllers/chen');

export async function Wqedc(inputs: JSONObject): Promise<WqedcOutput> {
    logger.debug('Calling wqedc with args: ', inputs);
    const params: WqedcInput = {};
    return transport.execute(WqedcMain, params) as Promise<WqedcOutput>;
}
