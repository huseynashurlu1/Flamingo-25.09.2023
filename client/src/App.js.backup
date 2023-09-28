import { BrowserRouter, Routes, Route, Redirect, Navigate  } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.jsx'
import Header from './components/Header/Navbar'
import './assets/css/reset.css'
import CategoryPage from './pages/CategoryPage';
import DetailPage from './pages/DetailPage';
import { useEffect } from 'react';
import CartPage from './pages/CartPage';
import AdminIndex from './pages/Admin/AdminIndex'
import Login from './pages/Admin/Login'
import NotFound from './pages/NotFound';
import Layout from './layout/Layout';
import AdminLayout from './layout/AdminLayout';
import Products from './pages/Admin/Product/Products';
import CreateItem from './pages/Admin/Product/CreateItem';
import Categories from './pages/Admin/Category/Categories';
import CreateCategory from './pages/Admin/Category/CreateCategory';
import CreateBrand from './pages/Admin/Brand/CreateBrand';
import Brands from './pages/Admin/Brand/Brands';
import Orders from './pages/Admin/Order/Orders';
import ProductDetails from './pages/Admin/Product/ProductDetails';
import Subcategory from './pages/Admin/SubCategory/Subcategory';
import CreateSub from './pages/Admin/SubCategory/CreateSub';
import Aggrement from './pages/Aggrement';

if(localStorage.getItem('cart') === null) {
  localStorage.setItem('cart', JSON.stringify([]))
}

function App() {
  const token = localStorage.getItem('token');

  return (
    <div className="App">
           <BrowserRouter>
          {
            
            token ? <AdminLayout>
                <Routes>
                  <Route path='/admin' element={<AdminIndex />}/>
                  <Route path='/admin/all-products' element={<Products />}/>
                  <Route path='/admin/category/create' element={<CreateCategory />}/>
                  <Route path='/admin/all-categories' element={<Categories />}/>
                  <Route path='/admin/category/:id' element={<CreateSub />}/>
                  <Route path='/admin/all-subcategories' element={<Subcategory />}/>
                  <Route path='/admin/product/create' element={<CreateItem />}/>
                  <Route path='/admin/product/:id' element={<ProductDetails />}/>
                  <Route path='/admin/brand/create' element={<CreateBrand />}/>
                  <Route path='/admin/all-brands' element={<Brands />}/>
                  <Route path='/admin/all-orders' element={<Orders />}/>
                  <Route path='*' element={<NotFound />}/>
                </Routes>
            </AdminLayout> :
              <Layout>
              <Routes>
                  <Route path='/' element={<HomePage />}/>
                  <Route path='/login' element={<Login />}/>
                  <Route path='/category/:id' element={<CategoryPage />}/>
                  <Route path='/details/:id' element={<DetailPage />}/>
                  <Route path='/cart' element={<CartPage />}/>
                  <Route path='/aggrement' element={<Aggrement />}/>
                  <Route path='*' element={<NotFound />}/>
              </Routes>
            </Layout>
          }
        </BrowserRouter>
    </div>
  );
}

export default App;
