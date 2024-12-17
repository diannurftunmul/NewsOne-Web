import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { saveNews, unsaveNews } from '../features/saved/savedSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsletterSubscription from '../components/NewsletterSub';

const Programming = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_KEY = process.env.REACT_APP_NYT_API_KEY;

    const dispatch = useDispatch();
    const savedNews = useSelector((state) => state.saved.savedNews);

    useEffect(() => {
        const fetchProgrammingNews = async () => {
            try {
                const response = await axios.get(
                    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=javascript OR coding OR programming&api-key=${API_KEY}`
                );
                setNews(response.data.response.docs);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching programming news:', error);
                setLoading(false);
            }
        };

        fetchProgrammingNews();
    }, [API_KEY]);

    const isNewsSaved = (article) =>
        savedNews.some((saved) => saved.web_url === article.web_url);

    const handleSaveUnsave = (article) => {
        if (isNewsSaved(article)) {
            dispatch(unsaveNews(article));
        } else {
            dispatch(saveNews(article));
        }
    };

    return (
        <div className="container mt-5 pt-5 min-vh-100 d-flex flex-column">
            <h1 className="mb-5 text-center fst-italic">Times Topics: Programming</h1>

            {loading ? (
                <div className="d-flex justify-content-center align-items-center flex-grow-1">
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3">Fetching the latest programming news, please wait...</p>
                    </div>
                </div>
            ) : (
                <div className="row">
                    {news.map((article, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100">
                                {article.multimedia && article.multimedia[0] ? (
                                    <img
                                        src={`https://www.nytimes.com/${article.multimedia[0].url}`}
                                        className="card-img-top limited-img"
                                        alt={article.headline.main}
                                    />
                                ) : (
                                    <img
                                        src="/NewsOne.png"
                                        className="card-img-top limited-img"
                                        alt="Placeholder"
                                    />
                                )}
                                <div className="card-body d-flex flex-column justify-content-between shadow-sm">
                                    <div>
                                        <h5 className="card-title">{article.headline.main}</h5>
                                        <p className="card-text">
                                            {article.abstract
                                                ? article.abstract.length > 70
                                                    ? `${article.abstract.substring(0, 70)}...`
                                                    : article.abstract
                                                : 'No Description.'}
                                        </p>
                                        <p className="card-text">
                                            <small className="text-muted">
                                                {article.byline && article.byline.original
                                                    ? article.byline.original
                                                    : 'Unknown Author'}
                                            </small>
                                        </p>
                                        <p className="card-text">
                                            <small className="text-muted">
                                                Source: {article.source || 'Unknown Source'}
                                            </small>
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <a
                                            href={article.web_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary flex-grow-1 me-2"
                                        >
                                            Read More
                                        </a>
                                        <button
                                            className={`btn ${isNewsSaved(article) ? 'btn-danger' : 'btn-success'} flex-grow-1`}
                                            onClick={() => handleSaveUnsave(article)}
                                        >
                                            {isNewsSaved(article) ? 'Un-Save' : 'Save'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <NewsletterSubscription />
        </div>
    );
};

export default Programming;