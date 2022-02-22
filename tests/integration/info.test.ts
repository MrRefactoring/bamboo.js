import { BambooClient } from '../../src';
import test from 'ava';

const client = new BambooClient({
  host: process.env.HOST!,
  authentication: {
    basic: {
      username: process.env.USERNAME!,
      password: process.env.PASSWORD!,
    },
  },
});

test.serial('should return info', async t => {
  const info = await client.info.getInfo();

  t.is(info.version, '8.1.3');
});
