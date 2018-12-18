'use strict';

let AWS = require('aws-sdk'),
    region = "us-east-1";

let secretsManager = new AWS.SecretsManager({
    region: region
});

module.exports.hello = async () => {
    let results = await secretsManager.getSecretValue({SecretId: 'frcSlackNotifierSecrets'}).promise();
    return {
        statusCode: 200,
        body: JSON.stringify(results.SecretString)
    };
};

module.exports.goodbye = async () => {
    let results = await secretsManager.getSecretValue({SecretId: 'frcSlackNotifierSecrets'}).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(results.SecretString)
    };
};