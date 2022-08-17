import React, { useCallback, useState, useContext } from "react";
import validator from "validator";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export function useFormWithValidation() {

    const currentUser = useContext(CurrentUserContext);

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const nameRegExpression = /[^[a-zа-яё -]+/i;

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
        } else if (!validator.isEmail(value)) {
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

    const validateFields = (inputName, value, event) => {
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

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setValues({
            ...values, [name]: value,
        })

        validateFields(name, value, event)
    }

    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues)
        setErrors(newErrors)
        setIsValid(newIsValid)
    }, [setValues, setErrors, setIsValid])

    return { values, handleChange, errors, isValid, resetForm, setIsValid, setValues };
}