import React, { useContext, useEffect, useState } from 'react';
import BookCard from '../Ui/BookCard';
import { BookContext } from '../../Context/BookProvider';

const ListedReadList = ({sortingType}) => {
    const { storeBooks } = useContext(BookContext)
    const [filterReadList, setFilterReadList] = useState(storeBooks)
    useEffect(() => {
        if(sortingType){
            if(sortingType === "pages"){
                const sortedData = [...storeBooks.sort((a,b)=> a.totalPages - b.totalPages)]
                console.log(sortedData);
                
                setFilterReadList(sortedData)
                
            }
            else if(sortingType === "rating"){
                const sortedData = [...storeBooks.sort((a,b)=> a.rating - b.rating)]
                console.log(sortedData);
                
                setFilterReadList(sortedData)
            }

        }
    },[sortingType, storeBooks])

    if(filterReadList.length === 0) {
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold'>No Read List data found</h2>
        </div>
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-4'>
                {
                    filterReadList.map((book, index) =>
                        <BookCard book={book} key={index}></BookCard>)
                }
            </div>
        </div>
    );
};

export default ListedReadList;