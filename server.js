const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const {workoutRouter} = require('./Routes/workoutRouter');

const { Workout, Regimen } = require('./models');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());


app.get('/', (req, res)=>{
  res.json({
    message: 'Feel the PWR with your own Personalized, Workout Regimen'
  })
})

app.use('/workouts',workoutRouter)


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

