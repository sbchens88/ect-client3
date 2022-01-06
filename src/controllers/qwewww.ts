import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwedddwwwMain, QwedddwwwOutput, QwedddwwwInput } from 'src/models/qwewww';

const logger = createLogger('controllers/qwewww');

export async function Qwedddwww(inputs: JSONObject): Promise<QwedddwwwOutput> {
    logger.debug('Calling qwedddwww with args: ', inputs);
    const params: QwedddwwwInput = {};
    return transport.execute(QwedddwwwMain, params) as Promise<QwedddwwwOutput>;
}
