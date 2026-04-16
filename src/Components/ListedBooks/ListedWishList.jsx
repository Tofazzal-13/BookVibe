import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookProvider';
import BookCard from '../Ui/BookCard';

const ListedWishList = ({sortingType}) => {
    const { wishlist} = useContext(BookContext)
     const [filterWishList, setFilterWishList] = useState(wishlist)

     useEffect(() => {
             if(sortingType){
                 if(sortingType === "pages"){
                     const sortedData = [...wishlist.sort((a,b)=> a.totalPages - b.totalPages)]
                     console.log(sortedData);
                     
                     setFilterWishList(sortedData)
                     
                 }
                 else if(sortingType === "rating"){
                     const sortedData = [...wishlist.sort((a,b)=> a.rating - b.rating)]
                     console.log(sortedData);
                     
                     setFilterWishList(sortedData)
                 }
     
             }
         },[sortingType, wishlist])

     
    if(filterWishList.length === 0) {
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold'>No Wish List data found</h2>
        </div>
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-4'>
                {
                    filterWishList.map((book, index) =>
                        <BookCard book={book} key={index}></BookCard>)
                }
            </div>
        </div>
    );
};

export default ListedWishList;