import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { Bucket, CorsRule, HttpMethods } from '@aws-cdk/aws-s3';

import { CONFIG } from './Config';

export class WebSiteStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const cors: CorsRule = {
      allowedMethods: [HttpMethods.GET],
      allowedOrigins: ['*'],
      allowedHeaders: ['*'],
      maxAge: 3000,
    };

    const bucket = new Bucket(this, 'bucket', {
      cors: [cors],
      websiteIndexDocument: CONFIG.webSite.indexDocument,
      websiteErrorDocument: CONFIG.webSite.errorDocument,
      publicReadAccess: true,
    });
  }
}
