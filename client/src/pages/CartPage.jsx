import React from 'react'
import '../assets/css/cart.css'
import { BsTrash3 } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { removeItem } from '../store/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import AlertBox from '../components/AlertBox';


const CartPage = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
        const basket = JSON.parse(localStorage.getItem('cart'));
        setProducts(basket);
      }, [])
      

    let totalAmount = 0
    const calculateTotalPrice = (product) => {
        return product.price * product.count;
    };
    calculateTotalPrice(products)

    for (const product of products) {
        totalAmount += calculateTotalPrice(product);
    }


     const handleRemoveFromCart = (id) => {
        dispatch(removeItem(id));
        setProducts(products.filter((item) => item._id !== id));
        navigate('/cart');
      };

      const plusHandler = (item) => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        let existProd = cart.find(x => x._id === item.item._id);
    
        if(existProd === undefined) {
          cart.push(existProd)
        }
        else{
          existProd.count += 1
        }
        
        localStorage.setItem('cart', JSON.stringify(cart))
        setProducts(cart)
        navigate('/cart');
      }
    
    
      const minusHandler = (item) => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        let existProd = cart.find(x => x._id === item.item._id);
    
        if(existProd === undefined) {
          cart.push(existProd)
        }
        else{
          existProd.count > 1 ? existProd.count -= 1 : existProd.count = 1
        }
        
        localStorage.setItem('cart', JSON.stringify(cart))
        setProducts(cart)
        navigate('/cart');
      }


      if(products.length == 0) {
        return <AlertBox text='Səbətdə məhsul yoxdur.'/>
      }

  return (
    <section id='Cart'>
        <div className="container">
            <div className="row gy-5">
                <div className="col-lg-9 table-area">
                    <table className='table table-bordered rounded-2'>
                        <thead>
                            <tr>
                                <th>Şəkli</th>
                                <th>Adı</th>
                                <th>Qiyməti</th>
                                <th>Sayı</th>
                                <th>Məbləğ</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(item => {
                                    return(
                                        <tr key={item._id}>
                                            <td>
                                                <img style={{width:"50%"}} src={`http://localhost:5000/uploads/${item.image}`} alt="" />
                                            </td>
                                            <td style={{width: "40%"}}>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>
                                            <div className="item-count-box">
                                                <span onClick={() => minusHandler({item})} className='minus'>-</span>
                                                <span>{item.count}</span>
                                                <span onClick={() => plusHandler({item})} className='plus'>+</span>
                                            </div>
                                            </td>
                                            <td>
                                                {((item.count) * (item.price)).toFixed(2)} ₼
                                            </td>
                                            <td>
                                                <button onClick={() => handleRemoveFromCart(item._id)}><BsTrash3 /></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-3">
                    <div className="order-details">
                        <h5>Sifarişin təsviri</h5>
                        <ul>
                            <li>Məhsul sayı: <span>{products.length}</span></li>
                            <li>Ümumi məbləğ:  <span>{totalAmount.toFixed(2)} ₼</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CartPage