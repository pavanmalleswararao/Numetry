const express = require('express');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const multerS3 = require('multer-s3');

const app = express();
const port = 5000;

const s3 = new S3Client({
  region: 'YOUR_REGION',
  credentials: {
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY'
  }
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'YOUR_BUCKET_NAME',
    key: (req, file, cb) => {
      const fileName = uuidv4();
      cb(null, fileName);
    },
    acl: 'public-read'
  })
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
