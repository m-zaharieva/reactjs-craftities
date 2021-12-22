const validationMessages = {
    fieldRequired: 'This field is required',
    title: 'Title should be between 6 and 60 characters long.',
    description: 'Description should be between 15 and 500 characters long',
    prise: 'Please, enter a valid positive number',
}

export const errorInitialValue = {title: false, description: false, category: false, prise: false, file: false};

export const required = (value) => {
    if (!value) {
        return true
    }
    return false;
}

export const titleValidation = (value) => {
    if (value.length < 6 || value.length > 60) {
        return true;
    }
    return false;
}

export const descriptionValidation = (value) => {
    if (value.length < 15 || value.length > 500) {
        return true;
    }
    return false;
}

export const priseValidation = (value) => {
    if (value < 0 || isNaN(value)) {
        return true;
    }
    return false;
}



// Event Handlers
export const titleValidationHandler = (addError, e) => {
    let value = e.currentTarget.value;
    if (required(value)) {
        addError('title', validationMessages.fieldRequired)
    } else if (titleValidation(value)) {
        addError('title', validationMessages.title)
    } else {
        addError('title', false)
    }
}

export const descriptionValidationHandler = (addError, e) => {
    let value = e.currentTarget.value;
    if (required(value)) {
        addError('description', validationMessages.fieldRequired);
    } else if (descriptionValidation(value)) {
        addError('description', validationMessages.description);
    } else {
        addError('description', false);
    }
}

export const categoryValidationHandler = (addError, e) => {
    let value = e.currentTarget.value;
    if (required(value)) {
        addError('category', validationMessages.fieldRequired);
    } else {
        addError('category', false);
    }
}

export const priseValidationHandler = (addError, e) => {
    let value = e.currentTarget.value;
    if (required(value)) {
        addError('prise', validationMessages.fieldRequired);
    } else if (priseValidation(value)) {
        addError('prise', validationMessages.prise);
    } else {
        addError('prise', false);
    }
}

export const submitFormValidation = (postData, addError) => {
    
    return Object.keys(postData).forEach(key => {
        if (required(postData[key])) {
            addError(key, validationMessages.fieldRequired);
        }
    });
}
