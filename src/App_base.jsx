import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateUserComponent from './components/CreateUserComponent';
import ViewUserComponent1 from './components/ViewUserComponent1';

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/list" exact element={<ListUserComponent />}></Route>
              <Route path="/add-user/:id" element={<CreateUserComponent />}></Route>
              <Route path="/view-user/:id" element={<ViewUserComponent1 />}></Route>              
              <Route path="*" name="Home" element={<DefaultLayout />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
