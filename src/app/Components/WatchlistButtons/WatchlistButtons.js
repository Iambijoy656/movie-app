
'use client';

import useWatchListStore from '@/app/store/store';
import React, { useState, useEffect } from 'react';

const WatchListButton = ({ movie }) => {
    const { addMovie, removeMovie, watchList } = useWatchListStore();

    const handleAddToWatchList = () => {
        addMovie(movie); // Optimistically add movie
    };

    const handleRemoveFromWatchList = () => {
        removeMovie(movie.id); // Optimistically remove movie
    };

    console.log(watchList);


    // const [watchList, setWatchList] = useState([]);

    // useEffect(() => {
    //     // Initialize the watchList from localStorage on mount
    //     const storedWatchList = JSON.parse(localStorage.getItem('watchList')) || [];
    //     setWatchList(storedWatchList);
    // }, []);

    // const handleAddToWatchList = () => {
    //     // Optimistically add the movie to the watchList
    //     setWatchList((prev) => [...prev, movie]);

    //     // Update localStorage asynchronously
    //     const updatedWatchList = [...watchList, movie];
    //     localStorage.setItem('watchList', JSON.stringify(updatedWatchList));
    // };

    // const handleRemoveFromWatchList = () => {
    //     // Optimistically remove the movie from the watchList
    //     const updatedWatchList = watchList.filter((m) => m.id !== movie.id);
    //     setWatchList(updatedWatchList);

    //     // Update localStorage asynchronously
    //     localStorage.setItem('watchList', JSON.stringify(updatedWatchList));
    // };

    // Check if the movie is in the watchList to toggle add/remove buttons
    const isInWatchList = watchList.some((m) => m.id === movie.id);

    return (
        <div className="flex space-x-4">
            {isInWatchList ? (
                <button
                    onClick={handleRemoveFromWatchList}
                    className="bg-red-200 text-red-800 py-2 px-4 rounded-full font-bold hover:bg-red-300"
                >
                    Remove from WatchList
                </button>
            ) : (
                <button
                    onClick={handleAddToWatchList}
                    className="bg-green-200 text-green-800 py-2 px-4 rounded-full font-bold hover:bg-green-300"
                >
                    Add to WatchList
                </button>
            )}
        </div>
    );
};

export default WatchListButton;




















// "use client"

// const WatchListButtons = ({ movie }) => {
//     const handleAddToWatchList = () => {
//         const watchList = JSON.parse(localStorage.getItem('watchList')) || [];
//         if (!watchList.some((m) => m.id === movie.id)) {
//             watchList.push(movie);
//             localStorage.setItem('watchList', JSON.stringify(watchList));
//         }
//     };

//     const handleRemoveFromWatchList = () => {
//         const watchList = JSON.parse(localStorage.getItem('watchList')) || [];
//         const updatedList = watchList.filter((m) => m.id !== movie.id);
//         localStorage.setItem('watchList', JSON.stringify(updatedList));
//     };

//     return (
//         <div className="flex flex-col md:flex-row -mx-2 my-4">
//             <div className="px-2">
//                 <button
//                     onClick={handleAddToWatchList}
//                     className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
//                 >
//                     Add to WatchList
//                 </button>
//             </div>
//             <div className=" px-2">
//                 <button
//                     onClick={handleRemoveFromWatchList}
//                     className="w-full bg-gray-200 dark:bg-gray-500 text-red-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
//                 >
//                     Remove from WatchList
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default WatchListButtons;


// components/WatchListButton.js