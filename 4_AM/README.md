# Day 4, AM: Forms

## Specification

Create a single page application which comprises of a form which users can fill out.

The form should gather the following information:

- Name - text
- Gender - dropdown
- Pronoun - radio buttons 
- Hometown - text input
- Three favorite foods - input
- Birthday - input type date
- HUID - numerical input
- Concentration - dropdown

After gathering this information, the form should have a submit button. When this button is clicked, a dynamically generated text should appear below the form, saying 'User's name is USER_NAME, and USER_PRONOUN are from USER_HOMETOWN. USER_PRONOUN was born on USER_BIRTHDAY, and USER_PRONOUN favorite foods are FOOD_1, FOOD_2, and FOOD_3. At Harvard, USER_NAME studies USER_CONCENTRATION.'

You must implement this form natively, without using the <form> tag. That is, practice the state manipulation skills we learned earlier today in lecture!

You should use at least three different types of form input (text fields, drop down menus, numerical fields, radio buttons, etc) in making this form.

If you finish early, we encourage you to add more functionality. Perhaps you could experiment with different types of input or draw from npm libraries for these - e.g., a calendar-style date picker for birthday, or a hidden passport input for HUID that toggles from visible to asterisk when the user clicks on a button. Get creative!

# Repository Information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
