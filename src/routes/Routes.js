import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../layout'
import Login from '../pages/Login'
import Register from '../pages/Register'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index={true} element={<Login />} />
        <Route path='signup' element={<Register />} />
      </Route>
      <Route path='*' element={<Navigate to='/' replace={true} />} />
    </Routes>
  )
}

export default MainRoutes
