import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import {
    WqedfgMain,
    WqedfgOutput,
    WqedfgInput,
    WqedfgfMain,
    WqedfgfOutput,
    WqedfgfInput,
    Wqedfgf2Main,
    Wqedfgf2Output,
    Wqedfgf2Input,
    Wqedfgf4Main,
    Wqedfgf4Output,
    Wqedfgf4Input
} from 'src/models/newest';

const logger = createLogger('controllers/newest');

export async function Wqedfg(inputs: JSONObject): Promise<WqedfgOutput> {
    logger.debug('Calling wqedfg with args: ', inputs);
    const params: WqedfgInput = {};
    return transport.execute(WqedfgMain, params) as Promise<WqedfgOutput>;
}

export async function Wqedfgf(inputs: JSONObject): Promise<WqedfgfOutput> {
    logger.debug('Calling wqedfgf with args: ', inputs);
    const params: WqedfgfInput = {};
    return transport.execute(WqedfgfMain, params) as Promise<WqedfgfOutput>;
}

export async function Wqedfgf2(inputs: JSONObject): Promise<Wqedfgf2Output> {
    logger.debug('Calling wqedfgf2 with args: ', inputs);
    const params: Wqedfgf2Input = {};
    return transport.execute(Wqedfgf2Main, params) as Promise<Wqedfgf2Output>;
}

export async function Wqedfgf4(inputs: JSONObject): Promise<Wqedfgf4Output> {
    logger.debug('Calling wqedfgf4 with args: ', inputs);
    const params: Wqedfgf4Input = {};
    return transport.execute(Wqedfgf4Main, params) as Promise<Wqedfgf4Output>;
}
