import { Link } from 'react-router-dom'
import './footer.css'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="row gy-4">
            <div className="col-lg-3 f-logo">
              <Link to='/'>Flamingo</Link>
              <p>Ən çox bol çeşid</p>
            </div>
            <div className="col-lg-3 f-box">
              <h5>Kateqoriyalar</h5>
              <Link>Qazan</Link>
              <Link>Stəkan</Link>
              <Link>Yuyucu vasitələr</Link>
            </div>
            <div className="col-lg-3 f-box">

              <h5>
                <FormattedMessage id="Keçidlər" defaultMessage="Keçidlər" />
              </h5>
              <Link to='/aggrement'>İstifadəçi razılaşması</Link>
              <Link>Xidmətlər</Link>
              <Link>FAQ</Link>
            </div>
            <div className="col-lg-3 social">
                <h5>
                 <FormattedMessage id="Bizimlə əlaqə" defaultMessage="Bizimlə əlaqə" />
                </h5>
                <a target='_blank' href="https://www.instagram.com/_eviniz/"><AiOutlineInstagram /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p >© {new Date().getFullYear()}. All rights reserved</p>
        </div>
      </div>
     
    </footer>
  )
}
export default Footer