const {
  Workout,
  Category
} = require('./models');

const createWorkouts = async () => {

  let intervalworkouts = await Workout.bulkCreate([{
      name: 'Sit-Ups',
      duration: 2,
      description: 'an exercise in which a person lies flat on the back, lifts the torso to a sitting position, and then lies flat again without changing the position of the legs',
      difficulty: 'Easy'
    },
    {
      name: 'Lunges',
      duration: 4,
      description: 'Lunges can help you develop lower-body strength and endurance, and unlike squats, they are highly effective at evening out muscle imbalances',
      difficulty: 'Moderate'
    },
    {
      name: 'Ab Rollers',
      duration: 4,
      description: 'From a standing position, grip the ab wheel firmly in both hands and fold forward at the waist',
      difficulty: 'Advanced'
    },
    {
      name: 'Squats',
      duration: 4,
      description: 'Stand with your feet hip-width apart, hands clasped in front of your chest',
      difficulty: 'Moderate'
    },
    {
      name: 'Planks',
      duration: 2,
      description: 'Holding the body (light as a feather) stiff as a board develops strength primarily in the core',
      difficulty: 'Moderate'
    },
  ]);

  let muscleworkouts = await Workout.bulkCreate([{
      name: 'Pull-Ups',
      duration: 5,
      description: 'Holding the entire body under tension, you pull yourself up by the arms until your chin extends over the bar',
      difficulty: 'Advanced'
    },
    {
      name: 'Bicep Curls',
      duration: 4,
      description: 'Keep your elbows close to your torso and rotate the palms of your hands until they are facing forward',
      difficulty: 'Easy'
    },
    {
      name: 'Lats Pulldown',
      duration: 3,
      description: 'Sit at a lat pulldown station and grab the bar with an overhand grip thats just beyond shoulder width',
      difficulty: 'Moderate'
    },
    {
      name: 'Chin-Ups',
      duration: 3,
      description: 'Your back and arms pull your body up while your abs prevent your lower back from arching',
      difficulty: 'Moderate'
    },
    {
      name: 'Seated Row',
      duration: 2,
      description: 'Keeping the torso stationary, pull the handles back towards your torso while keeping the arms close to it until you touch the abdominals',
      difficulty: "Moderate"
    },
  ])

  let crossfitworkouts = await Workout.bulkCreate([{
      name: 'Barbell Thruster',
      duration: 5,
      description: 'Lower the Barbell bar slowly, allowing your knees to bend to lessen the blow. Immediately transition back into the squatting movement to continue into the next repetition. Repeat for recommended number of repetitions.',
      difficulty: 'Moderate'
    },
    {
      name: 'Running on Treadmill',
      duration: 4,
      description: 'To begin, step onto the treadmill and select the desired option from the menu. Most treadmills have a manual setting, or you can select a program to run.',
      difficulty: 'Easy'
    },
    {
      name: 'Pull-Ups',
      duration: 5,
      description: 'Holding the entire body under tension, you pull yourself up by the arms until your chin extends over the bar',
      difficulty: 'Advanced'
    },
    {
      name: 'One Arm Kettle Swings',
      duration: 3,
      description: 'Place one kettlebell between your feet. Push back with your rear and bend your knees to get into the starting position. Make sure that your back isflat and look straight ahead. Swing the kettlebell between your legs forcefully. Quickly reverse the direction and drive though with your hipstaking the kettlebell straight out. Let the kettlebell swing back between your legs and repeat. Switch arms with each set.',
      difficulty: 'Moderate'
    },
    {
      name: 'Box Jump',
      duration: 2,
      description: 'Using the arms to aid in the initial burst, jump upward and forward, landing with feet simultaneously on top of the box or platform. Immediately drop or jump back down to the original starting place; then repeat the sequence.',
      difficulty: "Easy"
    },
  ])
}
const interval = async () => {
  await Category.create({
    title: 'Interval Training'
  })
}
const muscle = async () => {
  await Category.create({
    title: 'Muscle Focus Training'
  })
}
const crossfit = async () => {
  await Category.create({
    title: 'Crossfit Training'
  })
}

await intervalworkouts.setCategory(interval)
await muscleworkouts.setCategory(muscle)
await crossfitworkouts.setCategory(crossfit)

createWorkouts();
createCategory();