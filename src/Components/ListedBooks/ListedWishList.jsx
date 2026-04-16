import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import BookCard from '../Ui/BookCard';

const ListedWishList = () => {
    const { wishlist} = useContext(BookContext)
    if(wishlist.length === 0) {
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold'>No Wish List data found</h2>
        </div>
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-4'>
                {
                    wishlist.map((book, index) =>
                        <BookCard book={book} key={index}></BookCard>)
                }
            </div>
        </div>
    );
};

export default ListedWishList;