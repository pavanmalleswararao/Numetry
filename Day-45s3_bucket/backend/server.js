// server.js

const express = require('express');
const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const { Readable } = require('stream');

const app = express();

// Configure AWS SDK
const s3Client = new S3Client({
  region: 'YOUR_S3_BUCKET_REGION',
  credentials: {
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY'
  }
});

// Define API endpoint to get file
app.get('/getfile', async (req, res) => {
  const params = {
    Bucket: 'YOUR_S3_BUCKET_NAME',
    Key: 'YOUR_FILE_KEY'
  };

  try {
    const { Body } = await s3Client.send(new GetObjectCommand(params));

    const stream = Readable.from(Body);

    res.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${params.Key}"`
    });

    stream.pipe(res);
  } catch (error) {
    console.error('Error fetching file:', error);
    res.status(500).json({ error: 'Failed to get file from S3' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
