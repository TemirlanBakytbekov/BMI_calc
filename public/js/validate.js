document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    if(height && weight && age && gender){
        fetch('/bmicalculator', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ height, weight, age, gender }),
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = data.message;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    } else {
        alert('Please fill out all the fields.');
    }
});