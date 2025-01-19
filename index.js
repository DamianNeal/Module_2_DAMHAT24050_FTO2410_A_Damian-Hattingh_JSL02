const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value.trim(); // Get the input value and trim extra spaces
    const goalList = document.querySelector('#goalList');

    // Check if the input is empty
    if (!goalInput) {
        alert('Goal empty!');
        return;
    }

    // Check for duplicates
    const existingGoals = Array.from(goalList.querySelectorAll('li')); // Get all existing <li> items
    const isDuplicate = existingGoals.some((goal) => goal.textContent === goalInput);

    if (isDuplicate) {
        alert('This goal already exists!');
        return; // Exit the function to prevent adding a duplicate
    }

    // If it's not a duplicate, add the new goal
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;


    goalList.appendChild(newGoal); // Add the new goal to the list
    document.querySelector('#goalInput').value = ''; // Clear the input field
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
