import { ConfigDefinition } from '../lib/Config';

const config: ConfigDefinition = {
  webSite: {
    domain: 'test.heromo.dev',
    indexDocument: 'index.html',
    errorDocument: '/errors/index.html',
  },
};

export default config;
