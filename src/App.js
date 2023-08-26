import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import Demo from './components/Demo'


function App() {
  return (
    <div style={{}}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/demo' element={<Demo />}></Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
