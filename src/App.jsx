import './App.css';
import HomePage from './Components/HomePage';
import ProductsDescription from './Components/ProductsDescription';
import {Routes,Route} from 'react-router-dom'


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/projectDetails' element={<ProductsDescription />}/>
    </Routes>
    </>
  )
}

export default App
