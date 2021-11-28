import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { CheckSProcedureMain, CheckSProcedureOutput, CheckSProcedureInput } from 'src/models/n-tesin';

const logger = createLogger('controllers/nTesin');

export async function CheckSProcedure(inputs: JSONObject): Promise<CheckSProcedureOutput> {
    logger.debug('Calling checkSProcedure with args: ', inputs);
    const params: CheckSProcedureInput = {
        fp: inputs.fp
    };
    return transport.execute(CheckSProcedureMain, params) as Promise<CheckSProcedureOutput>;
}
