import './Footer.css'

function Footer() {
    return (
        <footer className="footer-section">
            <div className="container row">
                <div className="col-4 footer-content">
                    <ul>
                        <li><a href="/contacts" className="email-us">Say Hello</a></li>
                        <li className="contribution">Handmade by <a href="/lonk-to-git-hub">Mira</a> with ReactJS, ExpressJS and MongoDB</li>
                    </ul>
                    <div className="social-medias">
                        Social Media Link
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;