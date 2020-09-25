import React from "react";

const Contact = () => {
    return(
        <>
            <div className="my-5">
                <h1 className="text-center"> Our services </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">



                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Full Name</label>
                                    <input type="fullname" className="form-control"
                                           aria-describedby="emailHelp" placeholder="Full Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Phone</label>
                                    <input type="text" className="form-control"
                                           aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">email</label>
                                    <input type="email" className="form-control"
                                           aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your
                                        email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Message</label>
                                    <textarea className="form-control"  rows="3"></textarea>

                                </div>
                                <button type="submit" className="btn btn-outline-primary">Submit</button>
                            </form>




                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;