import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext()

const BookProvider = ({children}) => {
    const [storeBooks, setStoreBooks] = useState([])
    const [wishlist, setWishlist] = useState([])

    const handleMarkAsRead = (currentBook) => {
        
        const isExistBook = storeBooks.find((book) => book.bookId  === currentBook.bookId)
        if(isExistBook){
            toast.error("The book is already exist")
        }
        else{
            setStoreBooks([...storeBooks, currentBook])
            toast.success(`${currentBook.bookName} book is added`)
        }
        console.log(currentBook, storeBooks);
        
    }

    const handleWishList = (currentBook) => {
        console.log(currentBook);
        
        const isExistInReadList = storeBooks.find((book) => book.bookId  === currentBook.bookId )

        if(isExistInReadList){
            toast.error("this book is already in readlist")
            return;
        }
        
        const isExistBook = wishlist.find((book) => book.bookId  == currentBook.bookId)
        if(isExistBook){
            toast.error("The book is already exist")
        }
        else{
            setWishlist([...wishlist, currentBook])
            toast.success(`${currentBook.bookName} book is added`)
        }
        console.log(currentBook, storeBooks);
        
    }


    const data = {
        storeBooks, 
        setStoreBooks, 
        handleMarkAsRead,
        wishlist,
        setWishlist,
        handleWishList
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;