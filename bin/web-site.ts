#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { WebSiteStack } from '../lib/web-site-stack';

import { CONFIG } from '../lib/Config';

const app = new cdk.App();
const stackName = `${CONFIG.webSite.domain.replace(/\./g, '-').toLowerCase()}-web-site-stack`;
new WebSiteStack(app, stackName);
