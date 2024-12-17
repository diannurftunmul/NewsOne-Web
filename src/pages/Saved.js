import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unsaveNews } from '../features/saved/savedSlice';
import NotesBoard from '../components/Notes';
import NewsletterSubscription from '../components/NewsletterSub';

const Saved = () => {
    // Mengambil data savedNews dari Redux state
    const savedNews = useSelector((state) => state.saved.savedNews);
    const dispatch = useDispatch();

    const handleUnsaveNews = (article) => {
        dispatch(unsaveNews(article));
    };

    return (
        <div className="container mt-5 pt-5 min-vh-100 d-flex flex-column">
            <h1 className="mb-5 text-center fs-2">Saved News Data</h1>

            {savedNews.length === 0 ? (
                <div className="d-flex justify-content-center align-items-center flex-grow-1 mt-5">
                    <p className="text-center">You Haven't Saved Any News.</p>
                </div>
            ) : (
                <div className='table-responsive'>
                    <table className="table table-striped table-hover mt-5">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Headlines</th>
                                <th scope="col">Description</th>
                                <th scope="col">Link</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {savedNews.map((article, index) => {
                                const imageUrl = article.multimedia?.length
                                    ? `https://www.nytimes.com/${article.multimedia[0].url}`
                                    : '/NewsOne.png';
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img
                                                src={imageUrl}
                                                alt={article.headline.main}
                                                className="img-fluid rounded-3"
                                                style={{ maxWidth: '100px' }}
                                            />
                                        </td>
                                        <td>{article.headline.main}</td>
                                        <td>
                                            {article.abstract
                                                ? article.abstract.length > 100
                                                    ? `${article.abstract.substring(0, 100)}...`
                                                    : article.abstract
                                                : 'No Description.'}
                                        </td>
                                        <td>
                                            <a
                                                href={article.web_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-link"
                                            >
                                                Read More
                                            </a>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleUnsaveNews(article)}
                                            >
                                                Un-Save
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
            <NotesBoard />
            <NewsletterSubscription />
        </div>
    );
};

export default Saved;
