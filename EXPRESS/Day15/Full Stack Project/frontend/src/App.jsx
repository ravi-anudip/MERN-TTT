
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import List from './components/Userlist'

function App() {
 

  return (
    <>
      <nav>
        <ul>
          <li><Link to = '/'>Home</Link></li>
          <li><Link to = '/signup'>Signup</Link></li>
          <li><Link to = '/listuser'>List User</Link></li>
        </ul>
      </nav>
      <section style={{ 'width': '1200px', 'margin': '0 auto' }} >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/listuser' element={<List />} />
        </Routes>
      </section>
    </>
  )
}

export default App
