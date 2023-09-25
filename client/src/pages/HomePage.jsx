import '../assets/css/home.css'
import Category from '../components/Category/Category'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FormattedMessage } from 'react-intl';
import Slider from '../components/Slider'
import Banners from '../components/Banners'
import ProductItem from '../components/Product/ProductItem'
import apiUrl from '../utils/api';


const HomePage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getItems = async () => {
      await axios.get(apiUrl.productApi.getProducts)
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err))
    }

    getItems()
  }, [])



  const discounted = data && data.filter(item => item.discount === true)
  const most_viewed = data && data.filter(item => item.viewCount > 50)
 
  return (
    <section id="Home">
       <div className="container">
          <div className="CategorySlider">
            <div className="row">
              <div className="col-lg-3">
                <Category />
              </div>
              <div className="col-lg-9">
                <Slider />
              </div>
            </div>
          </div>
          <div className="most-viewed">
            <div className="container">
              <div className="top">
                  <h2>
                      <FormattedMessage id='Endirimli məhsullar' defaultMessage='Endirimli məhsullar'/>
                  </h2>
              </div>
              <div className="bottom py-3">
              <div className="row">
                    {
                    discounted && discounted.map(item => {
                      return(
                        <ProductItem key={item._id} col='col-lg-3' item={item}/>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="most-viewed">
            <div className="container">
              <div className="top">
                <h2>
                  <FormattedMessage id='Ən çox baxılanlar' defaultMessage='Ən çox baxılanlar'/>
                </h2>
              </div>
              <div className="bottom py-3">
              <div className="row">
                    {
                    most_viewed && most_viewed.map(item => {
                      return(
                        <ProductItem key={item._id} col='col-lg-3' item={item}/>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>

          <Banners />
      </div>
    </section>
  )
}
export default HomePage
