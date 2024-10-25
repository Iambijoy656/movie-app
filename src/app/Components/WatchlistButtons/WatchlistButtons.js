"use client"

const WatchListButtons = ({ movie }) => {
    const handleAddToWatchList = () => {
        const watchList = JSON.parse(localStorage.getItem('watchList')) || [];
        if (!watchList.some((m) => m.id === movie.id)) {
            watchList.push(movie);
            localStorage.setItem('watchList', JSON.stringify(watchList));
        }
    };

    const handleRemoveFromWatchList = () => {
        const watchList = JSON.parse(localStorage.getItem('watchList')) || [];
        const updatedList = watchList.filter((m) => m.id !== movie.id);
        localStorage.setItem('watchList', JSON.stringify(updatedList));
    };

    return (
        <div className="flex flex-col md:flex-row -mx-2 my-4">
            <div className="px-2">
                <button
                    onClick={handleAddToWatchList}
                    className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    Add to Watchlist
                </button>
            </div>
            <div className=" px-2">
                <button
                    onClick={handleRemoveFromWatchList}
                    className="w-full bg-gray-200 dark:bg-gray-500 text-red-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    Remove from Watchlist
                </button>
            </div>
        </div>
    );
}

export default WatchListButtons;
