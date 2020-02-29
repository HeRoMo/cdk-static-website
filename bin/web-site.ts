#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { WebSiteStack } from '../lib/web-site-stack';

const app = new cdk.App();
new WebSiteStack(app, 'WebSiteStack');
