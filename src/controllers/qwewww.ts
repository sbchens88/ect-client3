import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import {
    QwedddwwwMain,
    QwedddwwwOutput,
    QwedddwwwInput,
    Qwedddwww1Main,
    Qwedddwww1Output,
    Qwedddwww1Input,
    Qwedddwww2Main,
    Qwedddwww2Output,
    Qwedddwww2Input
} from 'src/models/qwewww';

const logger = createLogger('controllers/qwewww');

export async function Qwedddwww(inputs: JSONObject): Promise<QwedddwwwOutput> {
    logger.debug('Calling qwedddwww with args: ', inputs);
    const params: QwedddwwwInput = {};
    return transport.execute(QwedddwwwMain, params) as Promise<QwedddwwwOutput>;
}

export async function Qwedddwww1(inputs: JSONObject): Promise<Qwedddwww1Output> {
    logger.debug('Calling qwedddwww1 with args: ', inputs);
    const params: Qwedddwww1Input = {};
    return transport.execute(Qwedddwww1Main, params) as Promise<Qwedddwww1Output>;
}

export async function Qwedddwww2(inputs: JSONObject): Promise<Qwedddwww2Output> {
    logger.debug('Calling qwedddwww2 with args: ', inputs);
    const params: Qwedddwww2Input = {};
    return transport.execute(Qwedddwww2Main, params) as Promise<Qwedddwww2Output>;
}
