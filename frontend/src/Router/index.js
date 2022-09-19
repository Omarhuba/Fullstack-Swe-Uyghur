import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './config'

export const Router = () => {
  return (
    <BrowserRouter>
      {/* <Routes>
        {
          routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />))
        }
      </Routes> */}
      <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
    </BrowserRouter>
  )
}
