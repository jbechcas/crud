function validateForm() {
    var user = document.getElementById('insert-user').value;
    var userError = document.getElementById('insert-user-error');
    var password = document.getElementById('insert-password').value;
    var passwordError = document.getElementById('insert-password-error');
    var name = document.getElementById('insert-name').value;
    var lastName = document.getElementById('insert-last-names').value;
    var email = document.getElementById('insert-mail').value;
    var dni = document.getElementById('insert-dni').value;
    var children = document.getElementById('insert-children').value;
    var dateOfBirth = document.getElementById('insert-date-birthday').value;
    var dateOfBirthError = document.getElementById('insert-date-birthday-error');
    var department = document.getElementById('insert-department').value;
    var departmentError = document.getElementById('insert-department-error');
    var gender = document.getElementById('insert-gender').value;
    var genderError = document.getElementById('insert-gender-error');

    var valid = true;

    //Validación usuario

    if (user.trim() === "" || user.length < 8 || user.length > 12) {
        userError.textContent = "El usuario debe tener entre 8 y 12 caracteres.";
        valid = false;
    } else {
        userError.textContent = ""; 
    }

    //Validación password

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/;
    if (!password.match(passwordRegex)) {
        passwordError.innerHTML = "La contraseña debe tener entre 8 y 15 caracteres e incluir al menos una mayúscula, una minúscula y un dígito. <br> <br>";
        valid = false;
    } else {
        passwordError.textContent = ""; 
    }
    //Validación nombre

    var nameRegex = /^[A-Za-z ]{3,}$/;
    if (!name.match(nameRegex)) {
        document.getElementById('insert-name-error').textContent = "El nombre debe tener al menos 3 caracteres y no debe contener números.";
        valid = false;
    } else {
        document.getElementById('insert-name-error').textContent = ""; 
    }

    //Validación  apellido

    var lastNameRegex = /^[A-Za-z ]{3,}$/;
    if (!lastName.match(lastNameRegex)) {
        document.getElementById('insert-last-names-error').textContent = "El apellido debe tener al menos 3 caracteres y no debe contener números.";
        valid = false;
    } else {
        document.getElementById('insert-last-names-error').textContent = ""; 
    }

    //validación dni

    var dniRegex = /^\d{8}[a-zA-Z]$/;
    if (!dni.match(dniRegex)) {
        document.getElementById('insert-dni-error').textContent = "Formato incorrecto del DNI";
        valid = false;
    } else {
        document.getElementById('insert-dni-error').textContent = ""; 
    }

    //validación email

    var emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!email.match(emailRegex)) {
        document.getElementById('insert-mail-error').textContent = "Por favor, introduce un correo electrónico válido.";
        valid = false;
    } else {
        document.getElementById('insert-mail-error').textContent = ""; 
    }

    //validación fecha

    if (dateOfBirth.trim() === "") {
        dateOfBirthError.textContent = "Por favor, introduce tu fecha de nacimiento.";
        valid = false;
    } else {
        dateOfBirthError.textContent = "";
    }

    //validación hijos

    if (children.trim() === "") {
        document.getElementById('insert-children-error').textContent = "No puedes dejar este campo vacio";
        valid = false;
    } else if (isNaN(children)) {
        document.getElementById('insert-children-error').textContent = "Solo se admiten valores numéricos";
        valid = false;
    } else if (children.trim() < 0 || children.trim() > 30) {
        document.getElementById('insert-children-error').textContent = "Solo se admite el siguiente rango de números 0-30";
        valid = false;
    } else {
        document.getElementById('insert-children-error').textContent = "";
    }

    //validación departamento

    if (department.trim() == ""){
        departmentError.textContent = "Valor de departamento inválido";
        valid = false;
    } else if (isNaN(department) || department < 1 || department > 3) {
        departmentError.textContent = "Valor de departamento inválido";
        valid = false;
    } else {
        departmentError.textContent = "";
    }

    //validación género
    if(gender.trim() == ""){
        genderError.textContent = "El campo género no puede estar vacio";
        valid = false;
    }else if(gender.trim() != "man" && gender.trim() != "woman" && gender.trim() != "other"){
        genderError.textContent = "Valores inválido en género";
        valid = false;
    }else{
        genderError.textContent = "";
    }
    
    //validación recibir info
    var selectedOption = document.querySelector('input[name="receive-info"]:checked');
    var reciveInforError = document.getElementById('insert-info-error');

    if (!selectedOption) {
        valid = false;
        reciveInforError.textContent = "Debes seleccionar una opción";
    }else{
        reciveInforError.textContent = "";
    }
    //validación idiomas
    var selectedCheckboxes = document.querySelectorAll('input[name="languages"]:checked');
    var checkboxError = document.getElementById('checkbox-error');

    if (selectedCheckboxes.length < 2 || selectedCheckboxes.length > 3) {
        checkboxError.textContent = "Debes seleccionar entre dos y tres idiomas.";
        valid = false;
    } else {
        checkboxError.textContent = "";
    }

        return valid;
        
    }

    

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (validateForm()) {
        this.submit(); 
    }
});
