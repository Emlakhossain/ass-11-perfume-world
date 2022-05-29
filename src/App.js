import logo from './logo.svg';
import './App.css';
import Header from './Page/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Page/Footer/Footer';
import Home from './Page/Home/Home';
import Product from './Page/Product/Product';
import Blogs from './Page/Blogs/Blogs';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';
import NotFound from './Page/NotFound/NotFound';
import About from './Page/About/About';
import InventoryItem from './Page/InventoryItem/InventoryItem';
import RequirAuth from './Page/RequirAuth/RequirAuth';
import AddItem from './Page/AddItem/AddItem';
import ProductAdd from './Page/ProductAdd/ProductAdd';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/products' element={<Product></Product>} ></Route>
        <Route path='/product/:productId' element={<InventoryItem></InventoryItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/addproduct' element={<RequirAuth>
          <ProductAdd></ProductAdd>
        </RequirAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
