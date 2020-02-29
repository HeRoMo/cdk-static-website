import { ConfigDefinition } from '../lib/Config';

const config: ConfigDefinition = {
  webSite: {
    domain: process.env.DOMAIN || '',
    indexDocument: 'index.html',
    errorDocument: '/errors/index.html',
  },
  aws: {
    acmCertArn: process.env.ACM_ARN || '',
  },
};

export default config;
