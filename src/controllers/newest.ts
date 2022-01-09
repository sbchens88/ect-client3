import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { WqedfgMain, WqedfgOutput, WqedfgInput } from 'src/models/newest';

const logger = createLogger('controllers/newest');

export async function Wqedfg(inputs: JSONObject): Promise<WqedfgOutput> {
    logger.debug('Calling wqedfg with args: ', inputs);
    const params: WqedfgInput = {};
    return transport.execute(WqedfgMain, params) as Promise<WqedfgOutput>;
}
