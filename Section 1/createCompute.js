//Obtains user access credentials & authenicate using "gcloud auth application-default login"
//npm install --save @google-cloud/compute

'use strict';

const Compute = require('@google-cloud/compute');

// Your Google Cloud Platform project ID
const projectId = 'learning-gcp-225820';

// Creates a client
const compute = new Compute({
  projectId: projectId,
});

// Create a new VM using the latest OS image of your choice.
const zone = compute.zone('us-central1-c');
const name = 'learning-gce-rest-sdk-nodejs';

zone
  .createVM(name, {os: 'ubuntu'})
  .then(data => {
    // `operation` lets you check the status of long-running tasks.
    const vm = data[0];
    const operation = data[1];
    return operation.promise();
  })
  .then(() => {
    // Virtual machine created!
  })
  .catch(err => {
    console.error('ERROR:', err);
  });