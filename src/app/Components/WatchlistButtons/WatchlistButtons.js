// app/Components/WatchlistButtons.js
'use client';

import { addToWatchList, removeFromWatchList } from '@/app/actions/watchlistActions';

function WatchListButtons({ movie }) {
    const handleAddToWatchList = async () => {
        try {
            await addToWatchList(movie);
            console.log(`${movie.title} added to watchlist.`);
        } catch (error) {
            console.error("Failed to add to watchlist:", error);
        }
    };

    const handleRemoveFromWatchList = async () => {
        try {
            await removeFromWatchList(movie.id);
            console.log(`${movie.title} removed from watchlist.`);
        } catch (error) {
            console.error("Failed to remove from watchlist:", error);
        }
    };

    return (
        <div className="flex -mx-2 my-4">
            <div className="w-1/2 px-2">
                <button
                    onClick={handleAddToWatchList}
                    className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    Add to Wishlist
                </button>
            </div>
            <div className="w-1/2 px-2">
                <button
                    onClick={handleRemoveFromWatchList}
                    className="w-full bg-gray-200 dark:bg-gray-500 text-red-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    Remove from Wishlist
                </button>
            </div>
        </div>
    );
}

export default WatchListButtons;
