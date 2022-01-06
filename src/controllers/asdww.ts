import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwecccMain, QwecccOutput, QwecccInput } from 'src/models/asdww';

const logger = createLogger('controllers/asdww');

export async function Qweccc(inputs: JSONObject): Promise<QwecccOutput> {
    logger.debug('Calling qweccc with args: ', inputs);
    const params: QwecccInput = {};
    return transport.execute(QwecccMain, params) as Promise<QwecccOutput>;
}
