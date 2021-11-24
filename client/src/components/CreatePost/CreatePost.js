import './CreatePost.css';

function CreatePost() {

    return (
        <section className="create-form-section">
            <div className="container">
                <div className="col-10 create-form-wrapper">
                    <h2>Create Form</h2>
                    <form className="create-form row">
                        <div className="input-wrapper col-5">
                            <div className="image-preview"></div>
                            <label htmlFor="upload-image">Image</label>
                            <input type="file" id="upload-image" name="uploadImage" />
                        </div>
                        <div className="col-6">
                            <div className="input-wrapper">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" name="title" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="description">Description</label>
                                <textarea type="text" id="description" name="description" placeholder="Short description..."></textarea>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="category">Category</label>
                                <input type="category" id="category" name="category" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="prise">Prise</label>
                                <input type="prise" id="prise" name="prise" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="shipping">Shipping</label>
                                <input type="shipping" id="shipping" name="shipping" />
                            </div>
                            <input type="submit" value="Create" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default CreatePost;