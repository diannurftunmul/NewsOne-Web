import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { saveNews, unsaveNews } from '../features/saved/savedSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsletterSubscription from '../components/NewsletterSub';
import HeroSection from '../components/Hero';
import NewsCard from '../components/NewsCard';

const Covid = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_KEY = process.env.REACT_APP_NYT_API_KEY;

    const dispatch = useDispatch();
    const savedNews = useSelector((state) => state.saved.savedNews);

    useEffect(() => {
        const fetchCovidNews = async () => {
            try {
                const response = await axios.get(
                    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid&api-key=${API_KEY}`
                );
                setNews(response.data.response.docs);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching COVID-19 news:', error);
                setLoading(false);
            }
        };

        fetchCovidNews();
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
        <div>
            <HeroSection />
            <div className="container mt-5 pt-5 min-vh-100 d-flex flex-column">
                <h1 className="mb-5 text-center fst-italic">Times Topics: Covid-19</h1>

                {loading ? (
                    <div className="d-flex justify-content-center align-items-center flex-grow-1">
                        <div className="text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="mt-3">Fetching the latest Covid-19 news, please wait...</p>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        {news.map((article, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <NewsCard
                                    article={article}
                                    isSaved={isNewsSaved(article)}
                                    onSaveUnsave={handleSaveUnsave}
                                />
                            </div>
                        ))}
                    </div>
                )}
                <NewsletterSubscription />
            </div>
        </div>
    );
};

export default Covid;
