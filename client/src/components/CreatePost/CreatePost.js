import './CreatePost.css';

function CreatePost() {

    return (
        <section className="auth-form-section">
            <div className="container">

                <h2>Create Form</h2>
                <form action="/post/create" method="POST" className="auth-form">
                    <div className="form-input-outer">
                        <input type="text" id="title" name="title" placeholder="Title" />
                    </div>
                    <div className="form-input-outer">
                        <textarea type="text" id="description" name="description" placeholder="Description..."></textarea>
                    </div>
                    <div className="form-input-outer">
                        <input type="file" id="upload-image" name="uploadImage" placeholder="Upload Image" />
                    </div>
                    <div className="form-input-outer">
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </div>
                    <button type="submit">Create</button>
                </form>
            </div>
        </section>
    );
}

export default CreatePost;