import { useState } from 'react'

import LoginForm from './components/Form'
import { CreateCv } from './components/Cv'
import Dashboard from './views/Dashboard'
import {ThemeContext} from './util/ThemeContext'



function App() {
  const [theme, setTheme] = useState('light');

  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>
    <Dashboard/>
    </ThemeContext.Provider>
    {/* <CreateCv/>  */}
    {/* <LoginForm title="Create an account" label1="Name" label2="Email" label3="Password" label4="telephone"/>  */}
    </>
  )
}

export default App
