import * as config from 'config';

export interface ConfigDefinition {
  webSite: WebSite;
}

interface WebSite {
  domain: string;
  indexDocument: string;
  errorDocument: string;
}

interface Aws {
  s3Bucket: string;
}

const CONFIG: ConfigDefinition = {
  webSite: config.get<WebSite>('webSite'),
};

export { CONFIG };
