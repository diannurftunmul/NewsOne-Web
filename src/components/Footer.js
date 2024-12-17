import React from 'react';

const Footer = () => {

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#5cb874"
                    fillOpacity="1"
                    d="M0,32L48,69.3C96,107,192,181,288,186.7C384,192,480,128,576,101.3C672,75,768,85,864,106.7C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
            <footer className="text-white text-center py-3" style={{ backgroundColor: '#5cb874', padding: '5px' }}>
                <div className="container text-center text-white">
                    <h3 className="fst-italic mb-3">NewsOne</h3>
                    <p className='fst-italic'>
                        "One Small Step, One Big Change. With NewsOne, Dare to Spread Actual Information".
                    </p>
                    <div className="social-links">
                        <a href="https://www.x.com/nytimes/" className="text-white mx-2"><i className="bi bi-twitter"></i></a>
                        <a href="https://www.facebook.com/nytimes/" className="text-white mx-2"><i className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/nytimes/" className="text-white mx-2"><i className="bi bi-instagram"></i></a>
                        <a href="https://www.youtube.com/@nytimes" className="text-white mx-2"><i className="bi bi-youtube"></i></a>
                        <a href="https://id.linkedin.com/company/the-new-york-times" className="text-white mx-2"><i className="bi bi-linkedin"></i></a>
                    </div>
                    <div className="copyright mt-3">
                        &copy; 2024 <strong><span>NewsOne</span></strong>. All Rights Reserved
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
