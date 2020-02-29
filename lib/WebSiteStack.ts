import {
  Construct,
  Duration,
  Stack,
  StackProps,
} from '@aws-cdk/core';
import { Bucket, CorsRule, HttpMethods } from '@aws-cdk/aws-s3';
import {
  CloudFrontAllowedCachedMethods,
  CloudFrontAllowedMethods,
  CloudFrontWebDistribution,
  PriceClass,
  ViewerProtocolPolicy,
} from '@aws-cdk/aws-cloudfront';

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

    const dist = new CloudFrontWebDistribution(this, 'distribution', {
      comment: `for ${CONFIG.webSite.domain}`,
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: bucket,
          },
          behaviors: [{
            isDefaultBehavior: true,
            allowedMethods: CloudFrontAllowedMethods.GET_HEAD_OPTIONS,
            cachedMethods: CloudFrontAllowedCachedMethods.GET_HEAD,
            defaultTtl: Duration.millis(0),
            minTtl: Duration.millis(0),
            maxTtl: Duration.millis(0),
            compress: true,
            forwardedValues: {
              queryString: false,
              cookies: {
                forward: 'none',
              },
              headers: ['Origin'],
            },
          }],
        },
      ],
      priceClass: PriceClass.PRICE_CLASS_ALL,
      errorConfigurations: [
        {
          errorCode: 403,
          responsePagePath: '/forbidden.json',
          responseCode: 403,
          errorCachingMinTtl: 60,
        }, {
          errorCode: 404,
          responsePagePath: '/not-found.json',
          responseCode: 404,
          errorCachingMinTtl: 60,
        },
      ],
      defaultRootObject: 'index.html',
      viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      viewerCertificate: {
        aliases: [CONFIG.webSite.domain],
        props: {
          acmCertificateArn: CONFIG.aws.acmCertArn,
          sslSupportMethod: 'sni-only',
        },
      },
    });
  }
}
