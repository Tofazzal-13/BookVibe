import React, { useContext } from 'react';
import BookCard from '../Ui/BookCard';
import { BookContext } from '../../Context/BookProvider';

const ListedReadList = () => {
    const { storeBooks } = useContext(BookContext)
    if(storeBooks.length === 0) {
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold'>No Read List data found</h2>
        </div>
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-4'>
                {
                    storeBooks.map((book, index) =>
                        <BookCard book={book} key={index}></BookCard>)
                }
            </div>
        </div>
    );
};

export default ListedReadList;