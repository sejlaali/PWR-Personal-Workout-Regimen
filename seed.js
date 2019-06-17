const { Workout, Regimen } = require('./models');

 const createWorkouts = async () => {

    await Workout.bulkCreate([
      {
        name: 'pullUps',
        duration: 3,
        description: 'Holding the entire body under tension, you pull yourself up by the arms until your chin extends over the bar',
        difficulty: 'advanced'
        },
        {
        name: 'chinUps',
        duration: 3,
        description: 'Your back and arms pull your body up while your abs prevent your lower back from arching',
        difficulty: 'moderate'
        },
        {
        name: 'situps',
        duration: '2',
        description: 'an exercise in which a person lies flat on the back, lifts the torso to a sitting position, and then lies flat again without changing the position of the legs',
        difficulty: 'easy'
        },
        {
        name: 'bicep_curls',
        duration: 4,
        description: 'Keep your elbows close to your torso and rotate the palms of your hands until they are facing forward',
        difficulty: 'easy'
        },
        {
        name: 'seated_row',
        duration: 2,
        description: 'Keeping the torso stationary, pull the handles back towards your torso while keeping the arms close to it until you touch the abdominals',
        difficulty: "moderate"
        },
        {
        name: 'lat_pulldown',
        duration: 3,
        description: 'Sit at a lat pulldown station and grab the bar with an overhand grip thats just beyond shoulder width',
        difficulty:'moderate'
        },
        {
        name: 'lunges',
        duration: 4,
        description: 'Lunges can help you develop lower-body strength and endurance, and unlike squats, they are highly effective at evening out muscle imbalances',
        difficulty:'moderate'
        },
        {
        name: 'ab_roller',
        duration: 4,
        description: 'From a standing position, grip the ab wheel firmly in both hands and fold forward at the waist',
        difficulty:'advanced'
        },
        {
        name: 'squats',
        duration: 4,
        description: 'Stand with your feet hip-width apart, hands clasped in front of your chest',
        difficulty:'moderate'
        },
        {
        name: 'planks',
        duration: '2',
        description: 'Holding the body (light as a feather) stiff as a board develops strength primarily in the core',
        difficulty:'moderate'
        },
    ]);
  }


///////////////////////
// async function createRegimen(){
//     await Regimen.destroy({ where:{}});
//     await Regimen.create({
//         name: 'planks',
//         duration: '2',
//         description: 'Holding the body (light as a feather) stiff as a board develops strength primarily in the core',
//         difficulty:'moderate'
//     })
//   }

//   async function associateWorkoutAndRegimen(){
//     const regimen = await Workout.findOne({
//       where: { name: 'Dave'}
//     });
//     const workouts = await Regimen.findAll();
//     await regimen.setWorkouts(workouts);
//     const associateWorkouts = await Workouts.findAll({
//       include: Regimen
//     })
//     console.log(JSON.stringify(associateWorkouts, null, 2));
//   }

//   async function seed(){
//     try{
//       await createWorkouts();
//       await createRegimen();
//       await associateWorkoutAndRegimen();
//     }catch (e){
//       console.log(e)
//       }finally {
//         process.exit();
//       }
//     }
  
  createWorkouts();
  