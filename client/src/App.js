import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    
    </div>
  );
}

export default App;
