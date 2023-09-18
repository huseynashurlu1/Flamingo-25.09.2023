import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Link, useNavigate } from 'react-router-dom';
import { GoDot } from 'react-icons/go'
import { PiDotDuotone } from 'react-icons/pi'
import { BiLogOutCircle } from 'react-icons/bi'

const AppSidebar = () => {
    const navigate = useNavigate()

    const logoutHandler = () => {
        localStorage.removeItem('token');
        navigate('/')
        window.location.reload()
    }
  return (
    <div className='appSidebar'>
        <div className="container">
        <Link className='main-page-link' to='/admin'><PiDotDuotone /> Ana Səhifə</Link>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header><PiDotDuotone /> Məhsullar</Accordion.Header>
                <Accordion.Body>
                <Link to='/admin/product/create'><GoDot /> Yeni məhsul</Link>
                <Link to='/admin/all-products'><GoDot /> Bütün məhsullar</Link>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header><PiDotDuotone /> Kateqoriyalar</Accordion.Header>
                <Accordion.Body>
                <Link to='/admin/category/create'><GoDot /> Yeni kateqoriya</Link>
                <Link to='/admin/all-categories'><GoDot /> Bütün kateqoriyalar</Link>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header><PiDotDuotone /> Alt Kateqoriyalar</Accordion.Header>
                <Accordion.Body>
                <Link to='/admin/category/subcategory/create'><GoDot /> Yeni kateqoriya</Link>
                <Link to='/admin/all-subcategories'><GoDot /> Bütün kateqoriyalar</Link>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header><PiDotDuotone /> Brendlər</Accordion.Header>
                <Accordion.Body>
                <Link to='/admin/brand/create'><GoDot /> Yeni Brend</Link>
                <Link to='/admin/all-brands'><GoDot /> Bütün brendlər</Link>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header><PiDotDuotone /> Sifarişlər</Accordion.Header>
                <Accordion.Body>
                <Link to='/admin/all-orders'><GoDot />Bütün sifarişlər</Link>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <button onClick={logoutHandler}><BiLogOutCircle /> Çıxış</button>
        </div>
    </div>
  )
}

export default AppSidebar