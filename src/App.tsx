import { FC } from 'react'
import 'App.css'
import Dashboard from 'Components/RecipeList'
import NavBar from 'Components/NavBar'


const App: FC = () => {
  return (
    <>
      <NavBar />
      <Dashboard />
    </>
  )
}

export default App
