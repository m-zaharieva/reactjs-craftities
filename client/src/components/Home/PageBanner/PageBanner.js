import './PageBanner.css';

function PageBanner() {

    return (
        <section className="banner-section">
            <div className="page-banner">
                <div className="banner-image-holder">
                    <img src="/img/home-banner-girl.png" alt="" />
                </div>

                <div className="banner-content">
                    <h1>Some Trendy Title Here</h1>
                    <p>Some subtitle here</p>
                </div>
            </div>

        </section>
    )
}

export default PageBanner;