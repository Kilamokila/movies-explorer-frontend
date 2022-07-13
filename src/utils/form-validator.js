import React, { useCallback, useState } from "react";

export function useFormWithValidation() {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const nameRegExpression = /[^[a-zа-яё -]+/i;
    const emailRegExpression = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

    const validateName = (value, currentName, event) => {
        if (value === currentName) {
            setErrors({
                ...errors,
                'name': 'Введенное имя совпадает с текущим'
            })
            setIsValid(false)
        } else if (nameRegExpression.test(value)) {
            setErrors({
                ...errors,
                'name': 'Недопустимые символы в имени'
            })
            setIsValid(false)
        } else if (value.length === 0) {
            setErrors({
                ...errors,
                'name': 'Укажите имя'
            })
            setIsValid(false)
        } else if (value.length < 2) {
            setErrors({
                ...errors,
                'name': 'Имя должно быть не короче 2 символов'
            })
            setIsValid(false)
        } else if (value.length >= 30) {
            setErrors({
                ...errors,
                'name': 'Имя не может быть длиннее 30 символов'
            })
            setIsValid(false)
        } else {
            setErrors({
                ...errors,
                'name': ''
            })
            setIsValid(event.target.closest('form').checkValidity());
        }
    }

    const validatePassword = (value, event) => {
        if (value.length === 0) {
            setErrors({
                ...errors,
                'password': 'Укажите пароль'
            })
            setIsValid(false)
        } else if (value.length < 6) {
            setErrors({
                ...errors,
                'password': 'Пароль слишком короткий'
            })
            setIsValid(false)
        } else {
            setErrors({
                ...errors,
                'password': ''
            })
            setIsValid(event.target.closest('form').checkValidity());
        }
    }

    const validateEmail = (value, currentEmail, event) => {
        if (value === currentEmail) {
            setErrors({
                ...errors,
                'email': 'Введенный адрес электронной почты совпадает с текущим'
            })
            setIsValid(false)
        } else if (!emailRegExpression.test(value)) {
            setErrors({
                ...errors,
                'email': 'Несоответствие формату электронной почты'
            })
            setIsValid(false)
        } else if (value.length === 0) {
            setErrors({
                ...errors,
                'email': 'Укажите почту'
            })
            setIsValid(false)
        } else {
            setErrors({
                ...errors,
                'email': ''
            })
            setIsValid(event.target.closest('form').checkValidity());
        }
    }

    const validateFields = (inputName, value, event, currentUser) => {
        if (inputName === 'name') {
            validateName(value, currentUser.name, event)
        } else if (inputName === 'email') {
            validateEmail(value, currentUser.email, event)
        } else if (inputName === 'password') {
            validatePassword(value, event)
        } else {
            setErrors({
                ...errors,
                [inputName]: event.target.validationMessage
            })

        }
    }

    const handleChange = (event, currentUser) => {
        const name = event.target.name
        const value = event.target.value

        setValues({
            ...values, [name]: value,
        })

        validateFields(name, value, event, currentUser)
    }

    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues)
        setErrors(newErrors)
        setIsValid(newIsValid)
    }, [setValues, setErrors, setIsValid])

    return { values, handleChange, errors, isValid, resetForm, setIsValid };
}