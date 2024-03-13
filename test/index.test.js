import {expect, it, vi} from 'vitest';
import { getUnixTime } from '../src';

it('get unix timestamp', () => {
    vi.setSystemTime('2020-01-01');
    expect(getUnixTime()).toStrictEqual(1577836800);
    vi.useRealTimers();
});