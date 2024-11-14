import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ books }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSearchBox, setShowSearchBox] = useState(false);
    const navigate = useNavigate();

    const handleSearchIconClick = () => {
        setShowSearchBox(!showSearchBox); // Toggle search box visibility
    };

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value); // Update search term
    };

    // Filter books based on the search term
    const filteredBooks = searchTerm
        ? books.filter((book) =>
            book.title.toLowerCase() === searchTerm.toLowerCase() // Show only the exact match
        )
        : books; // Show all books if search term is empty

    const handleBuyNowClick = (book) => {
        navigate(`/book/${book.id}`); // Navigate to BookDetailPage with book ID
    };

    return (
        <div className="home-container">
            <h1 className="titel">Available Books</h1>
            <div className="search-container">
                <button className="search-icon" onClick={handleSearchIconClick}>
                    🔍
                </button>
                {showSearchBox && (
                    <input
                        type="text"
                        placeholder="Search for a book..."
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                        className="search-input"
                    />
                )}
            </div>
            <div className="book-grid">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <div key={book.id} className="book-card">
                            <img src={book.image} alt={book.title} />
                            <h3>{book.title}</h3>
                            <p>Price: {book.price}</p>
                            <button className="buy-now-button" onClick={() => handleBuyNowClick(book)}>
                                Buy Now
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No books found.</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;