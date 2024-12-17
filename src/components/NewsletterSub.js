import React from "react";

const NewsletterSubscription = () => {
    return (
        <div className="container mt-5 mb-5 py-5 bg-light shadow-sm rounded-3">
            <div className="row justify-content-center text-center">
                <div className="col-md-8">
                    <h3>Stay Updated with Our Latest News</h3>
                    <p>Subscribe to our newsletter to get the latest updates directly in your inbox.</p>
                    <div className="input-group mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email ..."
                            aria-label="Enter your email"
                            aria-describedby="subscribe-button"
                        />
                        <button
                            className="btn btn-success"
                            id="subscribe-button"
                            data-bs-toggle="modal"
                            data-bs-target="#subscribeModal"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div
                className="modal fade"
                id="subscribeModal"
                tabIndex="-1"
                aria-labelledby="subscribeModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="subscribeModalLabel">
                                Subscription Successful!
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                Thank you for subscribing to our newsletter! You'll now receive
                                the latest updates in your inbox.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-success"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSubscription;