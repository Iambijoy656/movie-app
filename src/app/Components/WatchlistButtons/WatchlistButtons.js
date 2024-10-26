
'use client';

import useWatchListStore from '@/app/store/store';
import React, { useState, useEffect } from 'react';

const WatchListButton = ({ movie }) => {
    const { addMovie, removeMovie, watchList } = useWatchListStore();

    const handleAddToWatchList = () => {
        addMovie(movie);
    };

    const handleRemoveFromWatchList = () => {
        removeMovie(movie.id);
    };

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















