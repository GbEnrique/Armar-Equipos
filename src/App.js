import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { Login } from './components/Login';
import { NewTeam } from './components/NewTeam';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Register } from './components/Register';
import { ViewTeams } from './components/ViewTeams';
import { AuthProvider } from './context/authContext';
export const App = () => {

  return (
    <div className='bg-dark bg-gradient'>
      <AuthProvider>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/viewteam" element={<ViewTeams />} />
          <Route path="/newteam" element={<NewTeam />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}
