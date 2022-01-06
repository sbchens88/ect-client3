import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { AsdvMain, AsdvOutput, AsdvInput } from 'src/models/chen-testing';

const logger = createLogger('controllers/chenTesting');

export async function Asdv(inputs: JSONObject): Promise<AsdvOutput> {
    logger.debug('Calling asdv with args: ', inputs);
    const params: AsdvInput = {};
    return transport.execute(AsdvMain, params) as Promise<AsdvOutput>;
}
