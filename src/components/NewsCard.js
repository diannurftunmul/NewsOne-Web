import React from 'react';

const NewsCard = ({ article, isSaved, onSaveUnsave }) => {
    return (
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
                        className={`btn ${isSaved ? 'btn-danger' : 'btn-success'} flex-grow-1`}
                        onClick={() => onSaveUnsave(article)}
                    >
                        {isSaved ? 'Un-Save' : 'Save'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;