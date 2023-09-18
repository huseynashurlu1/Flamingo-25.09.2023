import React from 'react'

const Banners = () => {
  return (
    <section id='Banners'>
        <div className="container">
            <h2>Brendlər</h2>
            <div className="row gy-4">
                <div className="col-lg-2 col-6">
                    <div className="brand-box">
                        <img src="https://seeklogo.com/images/K/karaca-logo-3301940216-seeklogo.com.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-2 col-6">
                    <div className="brand-box">
                        <img src="https://www.pasabahce.com/sites/catalogs/PublishingImages/logos-img/pasabahce_logo_2.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-2 col-6">
                    <div className="brand-box">
                        <img src="https://kukma.ru/image/catalog/logo_kukmara2.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-2 col-6">
                    <div className="brand-box">
                        <img src="https://play-lh.googleusercontent.com/NVbVwmGDjc1O8YISsbYz3wGYQSmyyJ69vf9lxw1wiP4eK5wk5l8YHnK5qucOGIlVUlI" alt="" />
                    </div>
                </div>
                <div className="col-lg-2 col-6">
                    <div className="brand-box">
                        <img src="data:image/png;base64,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" alt="" />
                    </div>
                </div>
                <div className="col-lg-2 col-6">
                    <div className="brand-box">
                        <img src="https://logowik.com/content/uploads/images/schafer3833.logowik.com.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banners