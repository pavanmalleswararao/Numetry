function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // convert to meters
    var bmi = weight / (height * height);
    var bmiCategory = "";
    var healthyFoods = []; // Array to store healthy food suggestions

    if (bmi < 18.5) {
        bmiCategory = "Underweight";
        // Suggestions for Underweight individuals
        healthyFoods = [
            "Nuts and seeds (almonds, walnuts, chia seeds)",
            "Nut butter (peanut butter, almond butter)",
            "Whole milk and dairy products",
            "Lean proteins (chicken breast, turkey)",
            "Complex carbohydrates (whole grain bread, brown rice)",
            "Avocados",
            "Olive oil",
            "Fruits (bananas, mangoes)",
            "Vegetables (sweet potatoes, carrots)"
        ];
        gymPredictions = "Consider consulting a nutritionist to help you gain weight in a healthy way. Also, a weight training program at the gym may help you build muscle mass.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Normal weight";
        // Suggestions for individuals with Normal weight (to maintain)
        healthyFoods = [
            "Lean proteins (fish, tofu, lentils)",
            "Whole grains (quinoa, oats)",
            "Healthy fats (avocados, nuts)",
            "Fruits (berries, apples)",
            "Vegetables (spinach, broccoli)",
            "Dairy products (Greek yogurt, cheese)"
        ];
        gymPredictions = "To maintain your weight and overall health, it's recommended to engage in regular physical activity, including a combination of cardiovascular exercises and strength training at the gym.";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = "Overweight";
        // Suggestions for Overweight individuals
        healthyFoods = [
            "Lean proteins (chicken breast, turkey)",
            "Fish (salmon, trout)",
            "Fruits (berries, apples)",
            "Vegetables (leafy greens, bell peppers)",
            "Whole grains (brown rice, quinoa)",
            "Healthy fats (avocados, olive oil)"
        ];
        gymPredictions = "In addition to maintaining a healthy diet, incorporating regular exercise into your routine, such as cardio workouts and strength training at the gym, can help you manage your weight.";
    } else {
        bmiCategory = "Obese";
        // Suggestions for Obese individuals
        healthyFoods = [
            "Lean proteins (fish, tofu)",
            "Vegetables (broccoli, cauliflower)",
            "Whole grains (oats, barley)",
            "Legumes (beans, lentils)",
            "Low-fat dairy products",
            "Healthy fats (nuts, seeds)"
        ];
        gymPredictions = "For individuals with obesity, it's crucial to focus on both diet and exercise. Consider working with a fitness trainer at the gym to develop a personalized workout plan that suits your needs and goals.";
    }

    // Output the suggestions
    var suggestionsHTML = "<strong>Healthy foods to gain normal weight:</strong><br>";
    for (var i = 0; i < healthyFoods.length; i++) {
        suggestionsHTML += "- " + healthyFoods[i] + "<br>";
    }
    
    document.getElementById('bmiResult').innerHTML = "<strong>Your BMI:</strong> " + bmi.toFixed(2) + " (" + bmiCategory + ")<br>" + suggestionsHTML + "<br>" + "<strong>Gym Predictions:</strong><br>" + gymPredictions;
}
