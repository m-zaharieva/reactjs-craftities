const validationMessages = {
    fieldRequired: 'This field is required',
    name: 'Your name should be at least 3 characters and contain only english letters',
    email: 'Please, enter valid email adress. It should contain only english letters, digits, "-", "_", "." and "@".',
    password: 'Your password should be at least 6 characters long, containing only English letters and digits.',
}

export const errorInitialRegisterValue = {firstName: '', lastName: '', email: '', password: '', repeatPassword: ''};
export const errorInitialLoginValue = {email: '', password: ''};

export const required = (value) => {
    if (!value) {
        return true
    }
    return false;
}

export const nameValidation = (value) => {
    let pattern = /^[A-Za-z]{3,}$/;
    if (!pattern.test(value)) {
        return true;
    }
    return false;
}

export const emailValidation = (value) => {
    let pattern = /^[a-z0-9]+[._-]*[a-z0-9]+@[a-z-]+.[a-z]+$/;
    if (!pattern.test(value)) {
        return true;
    }
    return false;
}

export const passwordValidation = (value) => {
    let pattern = /^[A-Za-z0-9]{6,}$/;
    if (!pattern.test(value)) {
        return true;
    }
    return false;
}


// Event Handlers

export const firstNameValidationHandler = (addError, e) => {
    let value = e.currentTarget.value;
    if (required(value)) {
        addError('firstName', validationMessages.fieldRequired)
    } else if (nameValidation(value)) {
        addError('firstName', validationMessages.name)
    } else {
        addError('firstName', false)
    }
}

export const lastNameValidationHandler = (addError, e) => {
    let value = e.currentTarget.value;
    if (required(value)) {
        addError('lastName', validationMessages.fieldRequired)
    } else if (nameValidation(value)) {
        addError('lastName', validationMessages.name)
    } else {
        addError('lastName', false)
    }
}

export const emailValidationHandler = (addError, e) => {
    let value = e.currentTarget.value;
    if (required(value)) {
        addError('email', validationMessages.fieldRequired)
    } else if (emailValidation(value)) {
        addError('email', validationMessages.email)
    } else {
        addError('email', false)
    }
}

export const passwordValidationHandler = (addError, e) => {
    let value = e.currentTarget.value;
    if (required(value)) {
        addError('password', validationMessages.fieldRequired)
    } else if (passwordValidation(value)) {
        addError('password', validationMessages.password)
    } else {
        addError('password', false)
    }
}

export const repeatPasswordValidationHandler = (addError, e) => {
    let value = e.currentTarget.value;
    if (required(value)) {
        addError('repeatPassword', validationMessages.fieldRequired)
    } else {
        addError('repeatPassword', false)
    }
}

export const submitFormValidation = (postData, addError) => {
    
    return Object.keys(postData).forEach(key => {
        if (required(postData[key])) {
            addError(key, validationMessages.fieldRequired);
        }
    });
}