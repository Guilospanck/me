import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'))

export const AppRoute = () =>
  <BrowserRouter basename={process.env.BASENAME}>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
