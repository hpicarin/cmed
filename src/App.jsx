import React, { Suspense,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateUserComponent from './components/CreateUserComponent';
import ViewUserComponent1 from './components/ViewUserComponent1';

import { CSpinner, useColorModes } from '@coreui/react'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout_T'))



function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
        <Route path="/test" name="Home" element={<DefaultLayout_T />} />
          <Route path="*" name="Home" element={<ListUserComponent />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
