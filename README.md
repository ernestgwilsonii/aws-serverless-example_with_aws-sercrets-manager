# aws-serverless-example_with_aws-sercrets-manager
AWS Serverless (aka Functions-as-a-Service) using Lambda and API Gateway and AWS Secrets Manager

##### REF: Serverless Framework -  https://serverless.com/framework/docs/

## Helpful videos:
##### REF: https://www.youtube.com/watch?v=71cd5XerKss
##### REF: https://www.youtube.com/watch?v=xF1Ko2_oLxc

## Prerequisites

##### A.) Functional AWS CLI (likely an administrative account with API access)
##### REF: https://aws.amazon.com/cli/
##### Note: Creating AWS credentials - https://serverless.com/framework/docs/providers/aws/guide/credentials/
```
pip install awscli
aws --version
aws configure
aws iam get-user
```

##### B.) Install Serverless CLI
##### REF: https://serverless.com/framework/docs/providers/aws/guide/installation/
```
npm install -g serverless
serverless --version
serverless
# Optional: Set your "serverless" creds differently or override your "AWS CLI" creds
# serverless config credentials --provider aws --key blah --secret blahblah
```


## Deploy

##### 1.) Edit the configuration for your specific deployment secrets and upload to AWS
```
# Edit file and set your specific values
vi secrets.json

# Create and upload your secrets to AWS Secrets Manager
aws secretsmanager --region us-east-1 create-secret --name frcSlackNotifierSecrets \
    --description "FRC Slack Notifier secrets created with the CLI" \
    --secret-string file://secrets.json

# Verify
aws secretsmanager --region us-east-1 get-secret-value --secret-id frcSlackNotifierSecrets
```

##### 2.) Create AWS Policies and Roles (specific to this function)
```
aws TBD/WIP
```

##### 3.) Define this specific project type (once)
```
serverless create -t aws-nodejs
```

##### 4.) Deploy the AWS Lambda (Serverless functions)
```
serverless deploy
# Optionally you may specify a stage if desired:
#serverless deploy --stage dev
#serverless deploy --stage prod
```
