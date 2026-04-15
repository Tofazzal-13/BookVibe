import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';

const Books = () => {
    const {storeBooks} = useContext(BookContext)
    console.log(storeBooks);
    

    return (
        <div>
           <h2>Listed Book</h2>
        </div>
    );
};

export default Books;