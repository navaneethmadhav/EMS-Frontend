import './App.css';
// import Testclass from './components/Testclass';
// import Testfunction from './components/Testfunction';

import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Testfunction/>
        <Testclass/> */}
        {/* <h1>Drinks</h1>
        <ul>
          <li>Tea</li>
          <li>Coffee</li>
        </ul> */}

        {/* <h1>React Features</h1>
        <ul>
          <li>Component Based Approach</li>
          <li>JSX</li>
          <li>Virtual DOM</li>
        </ul>
        <h3>React Features</h3>
        <ul>
          <li>Type Script</li>
          <li>Real DOM</li>
          <li>Framework</li>
        </ul>
        <h3>React</h3>
        <ul>
          <li>JSX+css</li>
          <li>Virtual DOM</li>
          <li>Library</li>
        </ul> */}

        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<Add />} />
            <Route path='/edit/:id' element={<Edit />} />
          </Routes>
        </Router>

      </header>
    </div>
  );
}

export default App;
