import { Routes, Route, Link } from 'react-router-dom'

import { CoffeePage } from './pages/Coffee'
import { FrontendPage } from './pages/Frontend'
import './App.scss'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">navbar</header>
      <Link to="coffee">Coffee</Link>
      <Link to="frontend">Frontend</Link>
      <Routes>
        <Route element={CoffeePage} />
        <Route element={FrontendPage} />
      </Routes>
    </div>
  )
}

export default App
