import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as HowToTriggerLambdaFromKinesis from '../lib/how-to-trigger-lambda-from-kinesis-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new HowToTriggerLambdaFromKinesis.HowToTriggerLambdaFromKinesisStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
