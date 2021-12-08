import './PageBanner.css';

function PageBanner() {

    return (
        <section className="banner-section">
            <div className="page-banner">
                <div className="banner-image-holder">
                    <img src="/img/home-banner-girl.png" alt="" />
                </div>

                <div className="banner-content">
                    <div className="container">
                        <h1>Wellcome to Craftities.<br/>We give your work a space to shine.</h1>
                        <p>We make things our way, so to give the best you deserve.<br/>Lorem ipsum dolor sit amet</p>
                        <p></p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default PageBanner;