import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { SrxdtcfygvuhbjnMain, SrxdtcfygvuhbjnOutput, SrxdtcfygvuhbjnInput } from 'src/models/apie';

const logger = createLogger('controllers/apie');

export async function Srxdtcfygvuhbjn(inputs: JSONObject): Promise<SrxdtcfygvuhbjnOutput> {
    logger.debug('Calling srxdtcfygvuhbjn with args: ', inputs);
    const params: SrxdtcfygvuhbjnInput = {};
    return transport.execute(SrxdtcfygvuhbjnMain, params) as Promise<SrxdtcfygvuhbjnOutput>;
}
