import './PageBanner.css';

function PageBanner() {

    return (
        <section className="banner-section">
            <div className="container page-banner">
                <div className="banner-image-holder col-11">
                    <img src="/img/explosion-colored-powder-white-background.jpg" alt="" />
                </div>

                <div className="banner-content col-9">
                    <h1>Some Trendy Title Here</h1>
                    <p>Some subtitle here</p>
                </div>
            </div>

        </section>
    )
}

export default PageBanner;