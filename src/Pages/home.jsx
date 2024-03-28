import React, { useEffect, useState } from 'react';
import SearchBar from '../customComponents/searchBar';
import ResultsArray from '../customComponents/resultsArray';

export default function Home() {
    const [showResults, setShowResults] = useState(false);
    const [articles, setArticles] = useState([]);
    const [randomArticles, setRandomArticles] = useState([]);

    function handleSearchClick() {
        setShowResults(true);
    }

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=nutrition&apiKey=92189695ae254a76a43d336a552a89b7')
            .then(res => res.json())
            .then(data => {
                if (data.articles) {
                    setArticles(data.articles);
                }
            })
            .catch(error => console.error("Failed to fetch news:", error));
    }, []);

    useEffect(() => {
        if (articles.length >= 4) {
            let indexes = new Set();
            while (indexes.size < 4) {
                indexes.add(Math.floor(Math.random() * articles.length));
            }
            setRandomArticles([...indexes].map(index => articles[index]));
        }
    }, [articles]);

    return (
        <div className='mt-4'>
            <div className='px-4 md:px-12 lg:px-24 max-w-screen-2xl mx-auto'>
            <h1 className='text-3xl font-bold text-center mb-6'>Find Your Next Opportunity in the Food Industry</h1>
                <SearchBar onSearch={handleSearchClick}/>
                {showResults && <ResultsArray/>}
                {/* Articles layout */}
                <h2 className='text-2xl font-bold mb-2 text-center'>Latest News</h2>
                {/* Subheading */}
                <h3 className='text-lg mb-4 text-center text-gray-600'>Stay updated with the latest in nutrition</h3>
                <div className='my-4'>
                    {/* Large screen layout */}
                    <div className='lg:grid lg:grid-cols-2 gap-4'>
                        {randomArticles.map((article, index) => (
                            <div key={index} className='p-4 border rounded-lg mb-4 lg:mb-0'>
                                <img src={article.urlToImage} alt={article.title} style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }}/>
                                <h3 className='text-md font-semibold mt-2'>{article.title}</h3>
                                <p>{article.description}</p>
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Read more</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
