#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ServerlessWebStack } from '../lib/serverless-web-stack';

const app = new cdk.App();
new ServerlessWebStack(app, 'ServerlessWebStack');
