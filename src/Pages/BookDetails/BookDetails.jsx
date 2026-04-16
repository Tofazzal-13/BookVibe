import React, { use, useContext } from 'react';
import { useParams } from 'react-router';
import { BookContext } from '../../Context/BookProvider';
const booksPromise = fetch('/booksData.json')
    .then(res => res.json())

const BookDetails = () => {
    const books = use(booksPromise)
    const {id} = useParams()
  


    // "bookId": 1,
    // "bookName": "The Great Gatsby",
    // "author": "F. Scott Fitzgerald",
    // "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
    // "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    // "totalPages": 192,
    // "rating": 4.5,
    // "category": "Classic",
    // "tags": ["Fiction", "Romance"],
    // "publisher": "Scribner",
    // "yearOfPublishing": 1925

    const expectedBook = books.find(book => book.bookId == id)
    const { bookName, author, image, totalPages, category, tags, review, publisher, yearOfPublishing } = expectedBook
   
    const {handleMarkAsRead, handleWishList} = useContext(BookContext)
    
    
    
    return (
        <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto mt-10">
            <figure className='flex items-center justify-center bg-gray-100 w-full rounded-xl'>
                <img
                    className='h-[400px] '
                    src={image}
                    alt="Movie" />

            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <h2 className="card-title">By: {author}</h2>
                <p className='border-y py-2'>{category}</p>
                <p>Review: {review}</p>
                <div className='flex gap-2 items-center'>
                    <small>Tags:</small> {tags.map((tag, index) => <div key={index} className="badge badge-soft badge-success font-bold"> {tag}</div>)}
                </div>
                <div className=" border-t py-2 space-y-2">
                    <div >
                        <span> Number of Page: {totalPages}</span>
                    </div>
                    <div>
                        <span> Publisher:  {publisher}</span>
                    </div>
                    <div>
                        <span>Year of Publishing  {yearOfPublishing}</span>
                    </div>
                    <div className='flex gap-2'>
                        <button className="btn" onClick={() => handleMarkAsRead(expectedBook)}>Mark at Read</button>
                        <button className="btn btn-primary" onClick={() => handleWishList(expectedBook)}>Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;