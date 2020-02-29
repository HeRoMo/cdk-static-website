import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import WebSite = require('../lib/web-site-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new WebSite.WebSiteStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
