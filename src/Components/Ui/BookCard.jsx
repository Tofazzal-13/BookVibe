import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 w-96 shadow-sm">
            <figure className='p-6'>
                <img
                    src={book.image}
                    className='rounded-xl h-[250px]'
                    alt={book.bookName} />
            </figure>
            <div className="card-body">
                <div className='flex gap-2 items-center'>
                    {book.tags.map((tag, index) => <div key={index} className="badge badge-soft badge-success font-bold"> {tag}</div>)}
                </div>
                <h2 className="card-title text-xl font-bold">{book.bookName}</h2>
                <p className='font-semibold'>By : {book.author}</p>
                <div className="card-actions justify-between items-center border-t pt-4 border-gray-300 text-xl">
                    <div className="font-semibold">{book.category}</div>
                    <div className="flex items-center gap-2 ">{book.rating} <FaRegStar /></div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;