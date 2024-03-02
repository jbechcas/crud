function validateForm() {
    var user = document.getElementById('login-user').value;
    var password = document.getElementById('login-password').value;
    var userError = document.getElementById('user-error');
    var passwordError = document.getElementById('password-error');
    var valid = true;

    // Resetear estilos y mensajes de error
    document.querySelectorAll('.error-field').forEach(function (el) {
        el.classList.remove('error-field');
    });
    document.querySelectorAll('.error-message').forEach(function (el) {
        el.textContent = "";
    });

    // Validación de usuario
    if (user.trim() === "" || user.length < 8 || user.length > 12) {
        userError.textContent = "El usuario debe tener entre 8 y 12 caracteres.";
        document.getElementById('login-user').classList.add('error-field');
        valid = false;
    }

    // Validación de contraseña
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/;
    if (!password.match(passwordRegex)) {
        passwordError.innerHTML = "La contraseña debe tener entre 8 y 15 caracteres e incluir al menos una mayúscula, una minúscula y un dígito. <br> <br>";
        document.getElementById('login-password').classList.add('error-field');
        valid = false;
    }

    return valid;
}

