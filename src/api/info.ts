import * as Models from './models';
import { Callback } from '../callback';
import { Client } from '../clients';
import { RequestConfig } from '../requestConfig';

export class Info {
  constructor(private client: Client) {}

  async getInfo<T = Models.Info>(callback: Callback<T>): Promise<void>;
  async getInfo<T = Models.Info>(callback?: never): Promise<T>;
  async getInfo<T = Models.Info>(callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: '/info',
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }
}
