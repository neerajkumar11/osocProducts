import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Add from './components/Add';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useState} from 'react'

function App() {

  const [user, setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={ user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
          <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/add" element={<Add setLoginUser={setLoginUser} user={user} /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
