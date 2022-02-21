import { AxiosError } from 'axios';
import type { RequestConfig } from './requestConfig';
import type { UtilityTypes } from './utilityTypes';

export interface Config {
  host: string;
  baseRequestConfig?: Config.BaseRequestConfig;
  authentication?: Config.Authentication;
  middlewares?: Config.Middlewares;
  /** Adds `'X-Atlassian-Token': 'no-check'` to each request header */
  noCheckAtlassianToken?: boolean;
}

export namespace Config {
  export type BaseRequestConfig = RequestConfig;
  export type Error = AxiosError;

  export type Authentication = UtilityTypes.XOR<{
    personalAccessToken: Authentication.PersonalAccessToken;
  }, UtilityTypes.XOR<{
    basic: Authentication.Basic;
  }, {
    oauth2: Authentication.OAuth2;
  }>>;

  export interface Middlewares {
    onError?: Config.Middlewares.OnErrorHandler;
    onResponse?: Config.Middlewares.OnResponseHandler;
  }

  export namespace Middlewares {
    export type OnErrorHandler = (error: Config.Error) => void;
    export type OnResponseHandler = (data: any) => void;
  }

  export namespace Authentication {
    export type PersonalAccessToken = string;

    export type Basic = UtilityTypes.XOR<{
      email: string;
      apiToken: string;
    }, {
      username: string;
      password: string;
    }>;

    export type OAuth2 = {
      accessToken: string;
    };
  }
}
