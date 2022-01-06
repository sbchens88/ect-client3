import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwedcMain, QwedcOutput, QwedcInput } from 'src/models/asds';

const logger = createLogger('controllers/asds');

export async function Qwedc(inputs: JSONObject): Promise<QwedcOutput> {
    logger.debug('Calling qwedc with args: ', inputs);
    const params: QwedcInput = {};
    return transport.execute(QwedcMain, params) as Promise<QwedcOutput>;
}
