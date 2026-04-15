import React, { createContext, useState } from 'react';

export const BookContext = createContext()

const BookProvider = ({children}) => {
    const [storeBooks, setStoreBooks] = useState([])
    const handleMarkAsRead = (currentBook) => {
        
        const isExistBook = storeBooks.find((book) => book.bookId  == currentBook.bookId)
        if(isExistBook){
            alert("The book is already exist")
        }
        else{
            setStoreBooks([...storeBooks, currentBook])
            alert(`${currentBook.bookName} book is added`)
        }
        console.log(currentBook, storeBooks);
        
    }


    const data = {
        storeBooks, setStoreBooks,handleMarkAsRead
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;