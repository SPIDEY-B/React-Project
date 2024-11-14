// src/components/BookDetailPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate


const BookDetailPage = ({ books }) => {
    const { id } = useParams(); // Get the book ID from the URL
    const navigate = useNavigate(); // Initialize the navigate function
    const book = books.find(b => b.id === parseInt(id)); // Find the book using the ID

    if (!book) {
        return <p>Book not found!</p>; // Handle case where book is not found
    }

    return (
        <div className="book-detail-container">
            <img src={book.image} alt={book.title} className="book-image" />
            <h2>{book.title}</h2>
            <p>Price: {book.price}</p>
            <h3>Payment Options</h3>
            <div className="payment-options">
                <button className="payment-button green">Buy Now</button>
                <button className="payment-button blue">PayPal</button>
                <button className="payment-button red">Net Banking</button>
                <button className="payment-button orange">UPI</button>
            </div>
            <button className="back-button" onClick={() => navigate('/home')}>Back to Home</button>
        </div>
    );
};

export default BookDetailPage;
