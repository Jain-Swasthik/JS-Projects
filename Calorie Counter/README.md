# Calorie Counter

This project is a simple calorie tracking application where users can input their daily meals (breakfast, lunch, dinner, and snacks) along with exercise information. It then calculates the remaining calories based on a user-defined calorie budget.

## Features

- Add meal entries for breakfast, lunch, dinner, and snacks.
- Input calories burned through exercise.
- Calculate remaining calories and display whether you are in a "Surplus" or "Deficit."
- Clear form functionality to reset all inputs and outputs.

## How It Works

### Core Functions

1. **`addEntry()`**:
   - Adds new input fields for meal entries under the selected category (breakfast, lunch, dinner, or snacks).
   - Each entry includes fields for the name of the meal and the number of calories it contains.

2. **`calculateCalories(e)`**:
   - Handles form submission and prevents the default submission behavior.
   - Calculates the total calories consumed for all meals and subtracts that from the user's calorie budget, adding calories burned through 
     exercise.
   - Displays the result as either a "Surplus" or "Deficit" in the output section.

3. **`getCaloriesFromInputs(list)`**:
   - Processes and validates the calorie input fields using regular expressions.
   - If any invalid input is detected, an error is triggered, preventing further calculation.
   - Valid inputs are summed to return the total number of calories.

4. **`clearForm()`**:
   - Clears all meal, exercise, and calorie budget inputs.
   - Hides the output section after clearing the form.

### Input Validation

- The application checks that all calorie inputs are valid numeric values.
- If any invalid inputs are detected (e.g., scientific notation or special characters), an alert is triggered, and the calculation is halted.

### User Interaction

- **Add Entry Button**: Adds a new entry for the selected meal category from the dropdown.
- **Calculate Remaining Calories Button**: Submits the form and calculates the total consumed and burned calories, showing whether the user is in a calorie surplus or deficit.
- **Clear Button**: Resets all inputs and hides the result.

## Instructions

### Setup

1. Clone the repository or download the project files.
2. Open `index.html` in your web browser.

### Usage

1. **Set Your Calorie Budget**: 
   - Enter your daily calorie budget in the "Calories Budgeted" field.
2. **Add Meal Entries**: 
   - Select a meal category (e.g., Breakfast, Lunch) from the dropdown.
   - Click the "Add Entry" button to create new meal entries with fields for the meal name and calories.
3. **Input Exercise Data**: 
   - Enter the number of calories burned during exercise in the "Exercise" section.
4. **Calculate**: 
   - Click the "Calculate Remaining Calories" button to see if you are in a calorie surplus or deficit. 
   - The result will display your remaining calories, calories consumed, calories burned, and your calorie budget.
5. **Clear Form**: 
   - Click the "Clear" button to reset all inputs and hide the output.

### Example of Output

After clicking "Calculate Remaining Calories," the output will look like this:

```html
<span class="surplusordeficit">300 Calorie Deficit</span>
<hr>
<p>2000 Calories Budgeted</p>
<p>1700 Calories Consumed</p>
<p>100 Calories Burned</p>
