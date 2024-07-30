# To-Do List App

This is a simple To-Do List application built with React. It allows users to add, complete, delete, and search tasks. The app also supports deployment on GitHub Pages.

## Features

- **Add Tasks**: Users can add new tasks to the list.
- **Complete Tasks**: Users can mark tasks as completed by clicking the checkbox.
- **Delete Tasks**: Users can remove tasks from the list.
- **Search Tasks**: Users can search for tasks by typing in the search bar.
- **Responsive Design**: The app is designed to be responsive and works on both desktop and mobile devices.

## Explanation of the implementation
  
- Components
The application is composed of two primary components: List and TaskList.

1. List Component
Purpose: The List component manages the overall state of the application, handles adding new tasks, and performs task searching.

State Management:

items: A string that holds the current input value from the user when adding a new task.
lists: An array of task objects, where each task has the properties task (description) and completed (boolean indicating if the task is done).
Key Functions:

addToList: Adds a new task to the lists array. It creates a new task object with the description from items and a default completed status of false. After adding the task, it clears the items input field.
searchTask: Filters tasks based on the search input provided by the user. It updates the lists array to show only tasks that match the search term. This function is called on every input change in the search bar.

2. TaskList Component
Purpose: The TaskList component handles displaying tasks, marking them as completed, editing, and deleting tasks.

State Management:

isEditing: An integer that tracks which task is currently being edited. If no task is being edited, it's null.
currentTask: A string that holds the value of the task being edited.
Key Functions:

completeTask: Toggles the completed status of a task. It creates a new list where the specified task's completed status is updated.
deleteFromList: Removes a task from the list by filtering out the task with the specified index.
editFromList: Sets the component to editing mode for the task with the specified index and initializes the currentTask state with the task's current value.
saveEdit: Saves the edited task by updating the task in the list with the new value from currentTask. It then exits editing mode.


## Technologies Used


- **React**: Frontend library for building the user interface.
- **JavaScript (ES6+)**: Programming language used for the logic.
- **GitHub Pages**: For deploying the application.

  ##Installation and deployment

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Megha-yadavv/react-project.git
   cd react-project

2.`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


To deploy the app to GitHub Pages, follow these steps:

1.Install gh-pages:

`npm install gh-pages --save-dev`


2.Update package.json:
Add the following fields to your package.json:

`"homepage": "https://Megha-yadavv.github.io/react-project",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}`

3. Deploy the App:

`npm run deploy`
