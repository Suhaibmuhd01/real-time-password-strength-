const passwordInput = document.getElementById('password');
const strengthMeter = document.getElementById('strength-meter');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);

    // Update the strength meter's color based on strength
    strengthMeter.style.backgroundColor = strength.color;
    strengthMeter.textContent = strength.text;
});

function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length > 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    // Assign a color and text based on strength
    let color, text;
    switch (strength) {
        case 0:
            color = '#F00';
            text = 'Weak';
            break;
        case 1:
        case 2:
            color = '#FFA500';
            text = 'Medium';
            break;
        case 3:
        case 4:
            color = '#0F0';
            text = 'Strong';
            break;
    }

    return { color, text };
}


// new code 
const passwordInputs = document.getElementById('passwordInput');
const strengthMeters = document.getElementById('strengthMeter');

passwordInputs.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);

    // Update the strength meter based on the strength level
    strengthMeters.textContent = strength.text;
    strengthMeters.style.backgroundColor = strength.color;
});

function checkPasswordStrength(password) {
    // Implement your password strength criteria here
    // For example:
    let strength = 0;
    if (password.length > 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    // Assign a strength level and corresponding color
    let strengthLevel;
    let color;
    if (strength <= 2) {
        strengthLevel = 'Weak';
        color = 'red';
    } else if (strength <= 3) {
        strengthLevel = 'Medium';
        color = 'orange';
    } else {
        strengthLevel = 'Strong';
        color = 'green';
    }

    return { text: strengthLevel, color: color };
}