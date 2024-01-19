const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.post('/bmicalculator', (req, res) => {
    const height = parseFloat(req.body.height) / 100; 
    const weight = parseFloat(req.body.weight);
    const age = parseInt(req.body.age);
    const gender = req.body.gender;

    const bmi = weight / (height * height);
    
    let result;
    if(bmi < 18.5) result = 'Underweight';
    else if(bmi >= 18.5 && bmi <= 24.9) result = 'Normal weight';
    else if(bmi >= 25 && bmi <= 29.9) result = 'Overweight';
    else result = 'Obesity';

    let message = `Your BMI is ${bmi.toFixed(2)}, categorized as ${result}.`;
    
    if(age >= 65) message += " Please note that BMI ranges may differ for older adults.";
    if(gender === 'male') message += " BMI ranges can vary with muscle mass.";
    if(gender === 'female') message += " BMI ranges can be influenced by body composition.";
    
    res.json({ message: message });
});

module.exports = router;
