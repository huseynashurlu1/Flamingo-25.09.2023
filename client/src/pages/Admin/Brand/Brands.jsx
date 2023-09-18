import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BsTrash3 } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Brands = () => {
    const [data, setData] = useState([])

    useEffect(() => {
      const getItems = async () => {
        await axios.get(`http://localhost:5000/api/brand/all-brands`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
      }
  
      getItems()
    }, [])

    const DeleteHandler = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/brand/${id}`)
            toast.error('Brend silindi', {
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
  return (
    <div className='container'>
    <h3 style={{fontFamily: "Regular", padding: "20px 0"}}>Bütün brendlər</h3>
    <div className="col-lg-5">
    <table className='table table-bordered'>
        <thead>
            <tr>
            <th>Adı</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {
                data && data.map(item => {
                    return(
                        <tr key={item._id}>
                            <td>{item.name}</td>   
                            <td>
                                <button onClick={() => DeleteHandler(item._id)} className='btn btn-danger ms-1'><BsTrash3 /></button>
                            </td>   
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </div>
    <ToastContainer />
</div>
  )
}

export default Brands