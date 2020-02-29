import * as config from 'config';

export interface ConfigDefinition {
  webSite: WebSite;
  aws: Aws;
}

interface WebSite {
  domain: string;
  indexDocument: string;
  errorDocument: string;
}

interface Aws {
  acmCertArn: string;
}

const CONFIG: ConfigDefinition = {
  webSite: config.get<WebSite>('webSite'),
  aws: config.get<Aws>('aws'),
};

export { CONFIG };
