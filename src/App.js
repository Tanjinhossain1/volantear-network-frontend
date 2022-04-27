import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Sheare/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { ToastContainer } from 'react-toastify';
import Checkout from './Pages/Checkout/Checkout';
import Admin from './Pages/Admin/Admin';
import Event from './Pages/Event/Event';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/register/:id' element={
          <RequireAuth>
            <Register></Register>
          </RequireAuth>
        }></Route>
        <Route path='/checkout' element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
        <Route path='/admin' element={<RequireAuth>
          <Admin></Admin>
        </RequireAuth>}></Route>
        <Route path='/event' element={<RequireAuth>
          <Event></Event>
        </RequireAuth>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
