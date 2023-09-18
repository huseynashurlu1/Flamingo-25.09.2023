import axios from 'axios'
import React, { useState, useEffect } from 'react'


const AdminIndex = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const getDatas = async () => {
      await axios.get('http://localhost:5000/api/statistics/all')
      .then(res =>{
        setData(res.data)
        console.log(res.data);
      })
      .catch(err => console.log(err))
    }

    getDatas();
  }, [])

  return (
    <div>
      <div className="container">
        {
          data && <div className="row my-5 st-all">
          <div className="col-lg-3">
            <div style={{backgroundColor: '#3C4B64'}} className="st-box card">
              <h4>Kateqoriya</h4>
              <p>{data.cat_count}</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div style={{backgroundColor: '#2A86D4'}} className="st-box">
              <h4>Məhsul</h4>
              <p>{data.pr_count}</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div style={{backgroundColor: '#F79C0D'}} className="st-box">
              <h4>Sifariş</h4>
              <p>{data.order_count}</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div style={{backgroundColor: '#DB3C3C'}} className="st-box">
              <h4>Giriş sayı</h4>
              <p>{data.countt}</p>
            </div>
          </div>
          </div>
        }

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3905.101245915266!2d49.873809918425856!3d40.39389848676774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1693856962246!5m2!1sen!2saz" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default AdminIndex