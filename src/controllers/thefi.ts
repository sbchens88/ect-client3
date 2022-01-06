import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { AsdfbMain, AsdfbOutput, AsdfbInput } from 'src/models/the-fi';

const logger = createLogger('controllers/theFi');

export async function Asdfb(inputs: JSONObject): Promise<AsdfbOutput> {
    logger.debug('Calling asdfb with args: ', inputs);
    const params: AsdfbInput = {};
    return transport.execute(AsdfbMain, params) as Promise<AsdfbOutput>;
}
