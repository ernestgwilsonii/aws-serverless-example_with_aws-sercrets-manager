# aws-serverless-example_with_aws-sercrets-manager
AWS Serverless (aka Functions-as-a-Service) using Lambda and API Gateway and AWS Secrets Manager

##### REF: Serverless Framework -  https://serverless.com/framework/docs/
##### REF: Create AWS credentials - https://serverless.com/framework/docs/providers/aws/guide/credentials/
## Helpful videos:
##### REF: https://www.youtube.com/watch?v=71cd5XerKss
##### REF: https://www.youtube.com/watch?v=xF1Ko2_oLxc

## Install Serverless CLI globally
```
sudo npm install -g serverless
```

## Define your AWS (IAM) credentials
```
export AWS_ACCESS_KEY_ID=blah
export AWS_SECRET_ACCESS_KEY=blahblah
serverless deploy
```
**or**
```
serverless config credentials --provider aws --key blah --secret blahblah
```
**or**
```
aws configure
```

## Edit secrets.json and run command (in secrets.txt) (once)
```
aws secretsmanager create-secret --name frcSlackNotifierSecrets --description "FRC Slack Notifier secrets created with the CLI" --secret-string file://secrets.json
```

## Define this specific project type (once)
```
serverless create -t aws-nodejs
```

## Deploy
```
serverless deploy
```
**or**
```
serverless deploy --stage dev
```
**or**
```
serverless deploy --stage prod
```
