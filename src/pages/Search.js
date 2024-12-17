import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveNews, unsaveNews } from '../features/saved/savedSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsletterSubscription from '../components/NewsletterSub';

const Search = () => {
    // Mengambil parameter "query" dari URL
    const { query } = useParams();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_KEY = process.env.REACT_APP_NYT_API_KEY;

    const dispatch = useDispatch();
    const savedNews = useSelector((state) => state.saved.savedNews);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await axios.get(
                    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`
                );
                setNews(response.data.response.docs);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching search results:', error);
                setLoading(false);
            }
        };

        if (query) {
            fetchSearchResults();
        }
    }, [query, API_KEY]);

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
            <h1 className="mb-5 text-center fst-italic">Result for: {query}</h1>

            {loading ? (
                <div className="d-flex justify-content-center align-items-center flex-grow-1">
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3">Fetching search results, please wait...</p>
                    </div>
                </div>
            ) : news.length > 0 ? (
                <div className="row">
                    {news.map((article, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100 shadow-sm">
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
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <h5 className="card-title">{article.headline.main}</h5>
                                        <p className="card-text">
                                            {article.abstract
                                                ? article.abstract.length > 75
                                                    ? `${article.abstract.substring(0, 75)}...`
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
            ) : (
                <p className="text-center">No results for: "{query}".</p>
            )}
            <NewsletterSubscription />
        </div>
    );
};

export default Search;