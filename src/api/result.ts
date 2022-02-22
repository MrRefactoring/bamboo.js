import * as Models from './models';
import * as Parameters from './parameters';
import { Callback } from '../callback';
import { Client } from '../clients';
import { RequestConfig } from '../requestConfig';

export class Result {
  constructor(private client: Client) {}

  /** Provide list of latest build results for top level plans visible for users. */
  async getLatestBuildResults<T = Models.Info>(parameters: Parameters.GetLatestBuildResults, callback: Callback<T>): Promise<void>;
  /** Provide list of latest build results for top level plans visible for users. */
  async getLatestBuildResults<T = Models.Info>(parameters: Parameters.GetLatestBuildResults, callback?: never): Promise<T>;
  async getLatestBuildResults<T = Models.Info>(parameters: Parameters.GetLatestBuildResults, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: '/result',
      method: 'GET',
      params: {
        expand: parameters.expand,
        favourite: parameters.favourite,
        label: parameters.label,
        issueKey: parameters.issueKey,
        includeAllStates: parameters.includeAllStates,
        lifeCycleState: parameters.lifeCycleState,
        continuable: parameters.continuable,
        buildstate: parameters.buildstate,
        'start-index': parameters['start-index'],
        'max-results': parameters['max-results'],
      },
    };

    return this.client.sendRequest(config, callback);
  }
}
