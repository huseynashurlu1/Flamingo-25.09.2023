import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../assets/css/details.css'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { MdPayment } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import 'react-toastify/dist/ReactToastify.css';
import ModalBox from '../components/ModalBox'
import { FormattedMessage } from 'react-intl';
import { BsEye } from 'react-icons/bs'
import Spinner from '../components/Spinner'


const DetailPage = () => {
    const { id } = useParams()
    const [data, setData] = useState()
    const [sameItems, setSameItems] = useState([])
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);

    
    const handleShow = () => {
        setActive(true)
    }

    useEffect(() => {
        const getItem = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/product/all-products/${id}`)
                setData(res.data)
                getSameItems(res.data.categoryId)

                await axios.put(`http://localhost:5000/api/product/${id}/increase-view`);    
            } catch (error) {
                console.log(error)
            }
        }

        const getSameItems = async (id) => {
            await axios.get(`http://localhost:5000/api/product/all-products/category/${id}`)
            .then(res => {
                setSameItems(res.data)
            })
            .catch(err => console.log(err))
        }
    
        getItem()
    }, [])


  const handleAddToCart = () => {
    dispatch(addItem({ ...data,count: 1 }));
    toast.success('Məhsul səbətə əlavə olundu', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  };

    
  return (
    <>
        {
            data ? <section id='Details'>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="item-photo">
                            {
                                data.discount && <span>Endirimli</span>
                            }
                            <img src={`http://localhost:5000/uploads/${data.image}`} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="item-desc">
                            <h4>{data.name}</h4>
                            <p>{data.description}</p>
                            <ul>
                                <li><FormattedMessage id='Şəhər' defaultMessage='Şəhər'/> : <span>Bakı</span></li>
                                <li><FormattedMessage id='Çatdırılma' defaultMessage='Çatdırılma'/>: <span>{data.shipping ? 'Var' : 'Yoxdur'}</span></li>
                            </ul>
                            {
                                data.discount ? <p className='item-price'><del className='me-4'>{data.price} AZN</del>{data.discountedPrice} AZN</p> : 
                                <p className='item-price'>{data.price} AZN</p>
                            }

                            <p className='view-count'>
                                <BsEye /> <span><FormattedMessage id='Baxış sayı' defaultMessage='Baxış sayı' /></span>:<span className='ms-2'>{data.viewCount}</span>
                            </p>
                            <div className="add-to-cart">
                                <button onClick={handleShow}><MdPayment /> <FormattedMessage id='Sifariş et' defaultMessage='Sifariş et'/></button>
                                <button onClick={handleAddToCart}><HiOutlineShoppingCart /> <FormattedMessage id='Səbətə at' defaultMessage='Səbətə at'/></button>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                    <ModalBox id={id} data={active}/>
                </div>

                <div className="familiars mt-5">
                        <h3>
                            <FormattedMessage id='Oxşar məhsullar' defaultMessage='Oxşar məhsullar' />
                        </h3>
                    <div className="row">
                        {
                            sameItems && sameItems.slice(0,4).map(item => {
                                return(
                                    <div key={item._id} className="col-lg-3 col-6">
                                        <Link to={`/details/${item._id}`}>
                                            <div className="item-box">
                                            <div className="item-image">
                                                {item.discount && <span>Endirimli</span>}
                                                <img className='img-fluid' src={`http://localhost:5000/uploads/${item.image}`} alt="" />
                                            </div>
                                            <div className="item-content">
                                                <h5>{item.name}</h5>
                                                <p>{item.price} AZN</p>
                                                <button><HiOutlineShoppingCart /> Səbətə at</button>
                                            </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section> : <Spinner />
        }
    </>
  )
}

export default DetailPage