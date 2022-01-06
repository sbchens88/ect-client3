import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import {
    AsdfgMain,
    AsdfgOutput,
    AsdfgInput,
    AsdfgasdMain,
    AsdfgasdOutput,
    AsdfgasdInput,
    AsdfgasdedsdaMain,
    AsdfgasdedsdaOutput,
    AsdfgasdedsdaInput
} from 'src/models/full-1';

const logger = createLogger('controllers/full1');

export async function Asdfg(inputs: JSONObject): Promise<AsdfgOutput> {
    logger.debug('Calling asdfg with args: ', inputs);
    const params: AsdfgInput = {};
    return transport.execute(AsdfgMain, params) as Promise<AsdfgOutput>;
}

export async function Asdfgasd(inputs: JSONObject): Promise<AsdfgasdOutput> {
    logger.debug('Calling asdfgasd with args: ', inputs);
    const params: AsdfgasdInput = {};
    return transport.execute(AsdfgasdMain, params) as Promise<AsdfgasdOutput>;
}

export async function Asdfgasdedsda(inputs: JSONObject): Promise<AsdfgasdedsdaOutput> {
    logger.debug('Calling asdfgasdedsda with args: ', inputs);
    const params: AsdfgasdedsdaInput = {};
    return transport.execute(AsdfgasdedsdaMain, params) as Promise<AsdfgasdedsdaOutput>;
}
