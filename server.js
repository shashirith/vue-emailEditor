import express from 'express';
import fs from 'fs';
import cors from 'cors';
const app = express();
const port = 3000; // Set your desired port number

app.use(express.json());
app.use(cors())

app.post('/data', (req, res) => {
  // Get the data from the request body
  const data = req.body;
    console.log(data);
  // Save the data to a local file
  fs.writeFile('data.json', JSON.stringify(data), (err) => {
    if (err) {
      console.error('Error saving data:', err);
      res.status(500).send('Error saving data');
    } else {
      console.log('Data saved successfully');
      res.status(200).send('Data saved successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
