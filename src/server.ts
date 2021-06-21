import express from 'express';

const app = express();

app
  .use(express.json())

  .get('/test-get', (req, res) => {
    return res.json({
      type: 'get',
      status: 'available'
    });
  })

  .post('/test-post', (req, res) => {
    return res.json({
      type: 'post',
      status: 'available'
    });
  })

app.listen(3000, () => console.log('Server running'));
