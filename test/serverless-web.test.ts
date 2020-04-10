import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import ServerlessWeb = require('../lib/serverless-web-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new ServerlessWeb.ServerlessWebStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
