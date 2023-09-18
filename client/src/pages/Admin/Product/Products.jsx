import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BsTrash3 } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

const Products = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState('')

  useEffect(() => {
    const getItems = async () => {
      await axios.get(`http://localhost:5000/api/product/all-products`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    }

    getItems()
  }, [])

  const DeleteHandler = async (id) => {
    console.log(id);
    try {
        const response = await axios.delete(`http://localhost:5000/api/product/${id}`)
        toast.error('Məhsul silindi', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    } catch (error) {
        console.log(error)
    } 
  }

  const inputHandler = (e) => {
    const filtered = data.filter(item => item._id.includes(e.target.value));
}

  return (
    <div className='container'>
        <div className="admin-pr-top d-flex justify-content-between align-items-center">
            <h3 style={{fontFamily: "Regular", padding: "20px 0"}}>Bütün məhsullar</h3>
            <input onChange={inputHandler} type="text" placeholder='Məhsulun kodu' />
        </div>
        <table className='table table-bordered'>
            <thead>
                <tr>
                <th>Məhsulun kodu</th>
                <th>Şəkli</th>
                <th>Adı</th>
                <th>Qiyməti</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map(item => {
                        console.log(item);
                        return(
                            <tr style={{verticalAlign: "baseline"}} key={item._id}>
                                            <td style={{width: "30%"}}>{item._id}</td>
                                            <td style={{width:"30%"}}>
                                                <img style={{width:"30%"}} src={`http://localhost:5000/uploads/${item.image}`} alt="" />
                                            </td>
                                            <td style={{width: "30%"}}>{item.name}</td>
                                            <td style={{width: "10%"}}>{item.price} AZN</td>
                                           
                                            <td className='d-flex justify-content-center'>
                                                <Link to={`/admin/product/${item._id}`} className='btn btn-warning me-1'><AiOutlineEdit /></Link>
                                                <button onClick={() => DeleteHandler(item._id)} className='btn btn-danger ms-1'><BsTrash3 /></button>
                                            </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <ToastContainer />
    </div>
  )
}

export default Products