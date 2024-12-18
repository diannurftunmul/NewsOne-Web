import React, { useEffect, useState } from "react";
import axios from "axios";

const HeroSection = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeroNews = async () => {
            try {
                const response = await axios.get(
                    `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
                );
                setNews(response.data.results.slice(0, 3));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching hero news:", error);
                setLoading(false);
            }
        };

        fetchHeroNews();

        // Polling setiap 5 menit
        const intervalId = setInterval(fetchHeroNews, 300000);

        return () => clearInterval(intervalId);
    }, []);

    if (loading) {
        return <p className="text-center mt-5">Loading Hero Section...</p>;
    }

    return (
        <div className="container-fluid p-0 shadow-sm">
            <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {news.map((article, index) => (
                        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                            <div className="position-relative hero-img-container">
                                <img
                                    src={
                                        article.multimedia && article.multimedia.length > 0
                                            ? article.multimedia[0].url
                                            : "/slide-1.jpg"
                                    }
                                    className="d-block w-100 hero-img"
                                    alt={article.title || "News Image"}
                                />
                                <div className="hero-overlay"></div>
                                <div className="hero-content d-flex flex-column align-items-center justify-content-center text-center text-white">
                                    <h1 className="fw-bold display-4 fs-2">
                                        {article.title || "Latest News"}
                                    </h1>
                                    <p className="lead mt-3">
                                        {article.abstract || "Stay updated with the latest headlines and insights."}
                                    </p>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-success btn-lg mt-3"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HeroSection;