import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import ProductDisplay from './components/ProductDisplay';
import ProductEdit from './components/ProductEdit';

function App() {

  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/products' element={<Main />} />        
        <Route path='/products/:id' element={<ProductDisplay />} />
        <Route path='/products/:id/edit' element={<ProductEdit />} />
      </Routes>
    </div>
  );
}

export default App;
