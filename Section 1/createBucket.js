//Obtains user access credentials & authenicate using "gcloud auth application-default login"
//npm install --save @google-cloud/storage

'use strict';

const {Storage} = require('@google-cloud/storage');

// Your Google Cloud Platform project ID
const projectId = 'learning-gcp-225820';

// Creates a client
const storage = new Storage({
  projectId: projectId,
});

// The name for the new bucket
const bucketName = 'learning-gcs-rest-sdk-nodejs-bucket';

// Creates the new bucket
async function createBucket() {
  await storage.createBucket(bucketName);
  console.log(`Bucket ${bucketName} created.`);
}

try {
  createBucket();
} catch (err) {
  console.error('ERROR:', err);
}