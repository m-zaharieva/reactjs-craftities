import './AuthForm.css';

function AuthForm({
    match
}) {

    console.log(match.path);

    let register = true;

    if (match.path.includes('login')) {
        register = false;
    }

    return (
        <section className="auth-form-section">
            <div className="container">
                <div className="row col-10 auth-form-wrapper">
                    <div className="auth-form-image-holder col-4">
                        <img className="auth-form-image" src="/img/curved-layers-colored-papers-close-up.jpg" alt="" />
                    </div>
                    <div className="auth-form-holder col-8">
                        <h1>Register Form</h1>
                        <form className="auth-form">
                            <div className="input-wrapper">
                                <label htmlFor="">Username <span className="required">*</span></label>
                                <input type="text" name="username" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="">Email <span className="required">*</span></label>
                                <input type="text" name="email" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="">Password <span className="required">*</span></label>
                                <input type="text" name="password" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="">Repeat password <span className="required">*</span></label>
                                <input type="text" name="repeat password" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AuthForm;
