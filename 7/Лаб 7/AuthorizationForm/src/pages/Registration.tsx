import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/App.css'
import { storage } from "../localStorage/localStorage"

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    form: '',
  })

  const validateName = (name: string) => {
    if (!name) return "Имя не может быть пустым"
    if (name.length < 2 || name.length > 50) return "Имя должно быть от 2 до 50 символов"
    if (!/^[A-Za-zА-Яа-яЁё\s]+$/.test(name)) return "Имя должно содержать только буквы и пробелы"
    return ""
  }

  const validateEmail = (email: string) => {
    if (!email) return "Email не может быть пустым"
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) return "Неверно введенный email"
    if (storage.emailExists(email)) return "Email уже существует"
    return ""
  }

  const validatePassword = (password: string) => {
    if (!password) return "Пароль не может быть пустым"
    if (password.length < 8) return "Пароль должен быть минимум 8 символов"
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) return "Пароль должен содержать одну заглавную букву, одну строчную букву и одну цифру"
    return ""
  }

  const validateConfirmPassword = (confirmPassword: string, password: string) => {
    if (!confirmPassword) return "Подтвердите пароль"
    if (confirmPassword !== password) return "Пароли не совпадают"
    return ""
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Валидация при каждом изменении
    let error = ''
    switch (name) {
      case 'name':
        error = validateName(value)
        break
      case 'email':
        error = validateEmail(value)
        break
      case 'password':
        error = validatePassword(value)
        break
      case 'confirmPassword':
        error = validateConfirmPassword(value, formData.password)
        break
    }

    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const nameError = validateName(formData.name)
    const emailError = validateEmail(formData.email)
    const passwordError = validatePassword(formData.password)
    const confirmPasswordError = validateConfirmPassword(formData.confirmPassword, formData.password)

    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
      form: nameError || emailError || passwordError || confirmPasswordError ? "Заполните форму правильно" : "",
    })

    if (!nameError && !emailError && !passwordError && !confirmPasswordError) {
      storage.addUser({ name: formData.name, email: formData.email, password: formData.password })
      setErrors(prev => ({ ...prev, form: "Вы успешно зарегистрировались!" }))
    }
  }

  return (
    <div className="formCard">
      <form onSubmit={handleSubmit}>
        <h1>Регистрация</h1>

        {/* Имя */}
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <div className="errorMessage">{errors.name}</div>}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <div className="errorMessage">{errors.email}</div>}

        {/* Пароль */}
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <div className="errorMessage">{errors.password}</div>}

        {/* Подтверждение пароля */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Подтвердите пароль"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        {errors.confirmPassword && <div className="errorMessage">{errors.confirmPassword}</div>}

        {/* Кнопка */}
        <button type="submit">Подтвердить</button>

        {/* Общая ошибка */}
        {errors.form && <div className="collapseMessage">{errors.form}</div>}

        {/* Успешная регистрация */}
        {!errors.form && formData.name && formData.email && formData.password && formData.confirmPassword && <div className="successMessage">{errors.form}</div>}

        {/* Ссылки */}
        <div className="links">
          <Link to="/sign-in">Войти в систему</Link>
        </div>
      </form>
    </div>
  )
}

export default Registration
