import { Link } from 'react-router-dom';
import './header.css';
import DropdownMenu from '../Dropdown';
import { BsSearch } from 'react-icons/bs'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { FormattedMessage } from "react-intl";
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { useEffect } from 'react';


const Navbar = (props) => {
    const [selectedLocale, setSelectedLocale] = useState('az');
    const [count, setCount] = useState(0);
  
    useEffect(() => {
        const basket = JSON.parse(localStorage.getItem('cart'));
        const product_count = basket.length;
        setCount(product_count);
      }, [])

    const handleLocaleChange = (locale) => {
        props.onChange(locale)
        setSelectedLocale(locale);
    }

  return (
    <header>
            <div className="top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-7">
                            <FormattedMessage id="Ölkənin ən bol çeşidli mağazası" defaultMessage="Ölkənin ən bol çeşidli mağazası" />
                        </div>
                        <div className="col-lg-6 col-5">
                            <div className="lang text-end">
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                    <FormattedMessage id="Dil seçimi" defaultMessage="Dil seçimi" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => handleLocaleChange('az')} href="#/action-1" selected={selectedLocale === 'az'}>Az</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleLocaleChange('en')} href="#/action-2" selected={selectedLocale === 'en'}>En</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleLocaleChange('ru')} href="#/action-3" selected={selectedLocale === 'ru'}>Ru</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mid">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                    <div className="col-lg-2 col-12">
                        <div className="logo">
                            <Link to='/'>Flamingo</Link>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="search d-flex">
                            <input type="text" placeholder='Məsələn, qazan'/>
                            <button><BsSearch /></button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 basket">
                        <Link to='/cart'>
                            <HiOutlineShoppingCart />
                            <span>{count}</span>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
    </header>
  )
}
export default Navbar