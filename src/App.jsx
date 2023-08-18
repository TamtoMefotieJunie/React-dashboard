import { useState } from 'react'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Form from './views/Login'
import { CreateCv } from './components/Cv'
import Dashboard from './views/Dashboard'
import {ThemeContext} from './util/ThemeContext'
import RegisterForm from './components/Form'



function App() {
  const [theme, setTheme] = useState('light');

  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<Form title="WELCOME" label2="Email" label3="Password"/>}/>
      </Routes>
    </Router>
    </ThemeContext.Provider>
    
    {/* <ThemeContext.Provider value={{theme, setTheme}}>
    <Dashboard/>
    </ThemeContext.Provider> */}
    {/* <CreateCv/>  */}
    {/* <RegisterForm title="Create an account" label1="Name" label2="Email" label3="Password" label4="telephone"/>  */}
    </>
  )
}

export default App
