# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Functional Components | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| Pseudocode / actual code | Incomplete
|Day 5| Initial Clickable Model  | Incomplete
|Day 6| MVP | Incomplete
|Day 7| Present | Incomplete


## Project Description

Workout app where there is a list of about 10 workouts, and the user gets to choose 4 from the list and add it to their personal workout regimen. Within the 10, they can create new workouts, delete a workout and edit a workout. 

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

## Priority Matrix

https://res.cloudinary.com/dfzjh0dui/image/upload/v1560776489/img_4504.jpg

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### SAMPLE.....
#### MVP 

 -Ability to pick from group of interval training workouts
	-Add to personal Workout regimen (limit of 4)
	-Show 10 workouts for Interval category
	-Delete workout from PRW
	-Create a new workout
	-Edit workout in list
	-CSS

#### PostMVP 

-Adding multiple PWRs
-Sort PWRs based on difficulty
-Adding another category and list of workouts

## React Architectural Design

https://res.cloudinary.com/dfzjh0dui/image/upload/v1560597787/Screen_Shot_2019-06-15_at_7.22.35_AM.png

## ERD

https://res.cloudinary.com/dfzjh0dui/image/upload/v1560596697/Screen_Shot_2019-06-15_at_7.04.23_AM.png

Interval training is our category of workouts, and the workouts are the 10 options a user can choose from. The idea is that if we have time, we can always add another category(model) of workouts such as HIIT, Crossfit etc. that will have its own set of workouts.

## (Functional) Components

| Component | Description | 
| --- | :---: |  
| Landing Page | This will render landing page/component that will use svgs | 
| List of Workouts | This will render list of workout options from our model|
| Create a new workout | This will be rendered on the List of Workouts component & will allow the user to create a new workout|
| Show One Specific Workout | This will render the workout that the user clicked on and will have all info about workout shown, as well as ability to edit the workout information and delete it|
| Personal Workout Regimen | From the list of workouts, we want our users to be able to select 4 out of the 10 workouts to add to their Personal Workout Regimen. This component will render the 4 workouts chosen|



Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Landing Page | L | 3hrs| hrs |
| List of Workouts | H | 3hrs| hrs |
| Create New Workout | H | 3hrs| hrs |
| Show One Specific Workout | H | 3hrs| hrs |
| Personal Workout Regimen | H | 6hrs| hrs |
| Total | H | 18hrs| 0hrs | 

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| Bootstrap | Used to help style my application | 
| Giphy API | Used to get gifs to use | 


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
