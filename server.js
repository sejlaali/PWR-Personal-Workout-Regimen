const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

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

//get all the students
// app.get('/instructors/:id/students', async (req, res)=>{
//   try{
//     const students = await Student.findAll({
//       where:{
//         instructor_id:req.params.id
//       }
//     })
//     res.json({
//       students
//     })
//   }catch(err){
//     res.status(500).json({
//       message:err.message
//     })
//   }
// })

// app.get('/instructors/:instructor_id/students/:id', async (req, res)=>{
//   try{
//     const students = await Student.findByPk(req.params.id)
     
//     res.json({
//       students
//     })
//   }catch(err){
//     res.status(500).json({
//       message:err.message
//     })
//   }
// })

// I checked postman and created a user
// app.post('/instructors/:id/students', async (req, res)=>{
//   try{
//     const instructor = await Instructor.findByPk( req.params.id )
//     const student = await Student.create( req.body )
//     await student.setInstructor( instructor )
//     res.json(student)
//   }catch(err){
//     res.status(500).json({
//       message:err.message
//     })
//   }
// })

// app.put('/instructors/:instructor_id/students/:id', async (req,res)=>{
//   try{
//     const students = await Student.update(req.body, {
//       where:{
//         instructor_id:req.params.instructor_id
//       }
//     })
//     res.json(students)
//   }catch(err){
//     res.status(500).json({
//       message:err.message
//     })
//   }
// })




// app.delete('/instructors/:instructor_id/students/:id', async (req,res)=>{
//   try{
//     const students = await Student.findByPk(req.params.id)
//     students.destroy();
//     res.json({
//       message: `Student with this id ${req.params.id} was dismissed`
//     })
//   }catch(err){
//     res.status(500).json({
//       message:err.message
//     })
//   }
// })


// TODO: write route handelers for:
// GET / (should just respond with a welcome message)
// GET /instructors/{id}/students 
// POST /instructors/{id}/students
// GET /instructors/{instructor_id}/students/{id}
// DELETE /instructors/{instructor_id}/students/{id}


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

