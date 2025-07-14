import './css/App.css'

import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom'
import Registration from './pages/Registration'
import Authorization from './pages/Authorization'
import PasswordRecovery from './pages/PasswordRecovery'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="*" element={<div>404 — Страница не найдена</div>} />
        <Route path='/' element={<Navigate to="/sign-in" replace />} />
          <Route path='/sign-up' element={<Registration />} />
          <Route path='/sign-in' element={<Authorization />} />
          <Route path='/reset-password' element={<PasswordRecovery />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
