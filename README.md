# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Functional Components | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| Pseudocode / actual code | Complete
|Day 5| Initial Clickable Model  | Complete
|Day 6| MVP | Complete
|Day 7| Present | Incomplete


## Project Description
User can choose one of the three categories. Then a list of about 10 workouts will render, and the user gets to choose 4 from the list and add it to their personal workout regimen. Within the 10, they can create new workouts, delete a workout and edit a workout. 

## Wireframes

https://res.cloudinary.com/diqd6zflz/image/upload/v1560778830/Screen_Shot_2019-06-17_at_9.27.44_AM_lhkd6j.png
https://res.cloudinary.com/diqd6zflz/image/upload/v1560778892/Screen_Shot_2019-06-17_at_9.28.02_AM_eegadt.png

https://res.cloudinary.com/dfzjh0dui/image/upload/v1560778423/20190617_092106.jpg
https://res.cloudinary.com/dfzjh0dui/image/upload/v1560778584/20190617_092100.jpg

## Priority Matrix

https://res.cloudinary.com/dfzjh0dui/image/upload/v1560778440/20190617_093239.jpg

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MVP and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### SAMPLE.....
#### MVP 

-Choose from one of the three categories
-Render 10 workouts per category
-Add workout from category to PWR
	-Add to personal Workout regimen (limit of 4)
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

https://res.cloudinary.com/dfzjh0dui/image/upload/v1560865086/Screen_Shot_2019-06-18_at_9.37.29_AM.png

Each category of training will have 10 workouts that a user can choose from.

## (Functional) Components

| Component | Description | 
| --- | :---: |  
| Landing Page | This will render landing page/component that will use svgs | 
| Show All Categories | This will render 3 categories that a user can choose from | 
| One Category | This will render list of workout options from our model based on category chosen/clicked on|
| Create a new workout | This will be rendered on the One Category component & will allow the user to create a new workout|
| Edit a workout | This will be linked to the workout names where the user will be able to click on the name and edit one of the workout fields|
| Personal Workout Regimen | From the list of workouts, we want our users to be able to select  workouts to add to their Personal Workout Regimen|


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Landing Page | L | 3hrs| hrs |
|  Backend Server files | H | 4hrs| 4hrs |
| Show All Categories | H | 3hrs| 3hrs |
| Create New Workout | H | 3hrs| 2hrs |
| One Category | H | 3hrs| 2hrs |
| Personal Workout Regimen | H | 6hrs| 4hrs |
| Total | H | 21hrs| 15hrs | 

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
