import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { WqrewtghMain, WqrewtghOutput, WqrewtghInput } from 'src/models/chens';

const logger = createLogger('controllers/chens');

export async function Wqrewtgh(inputs: JSONObject): Promise<WqrewtghOutput> {
    logger.debug('Calling wqrewtgh with args: ', inputs);
    const params: WqrewtghInput = {};
    return transport.execute(WqrewtghMain, params) as Promise<WqrewtghOutput>;
}
