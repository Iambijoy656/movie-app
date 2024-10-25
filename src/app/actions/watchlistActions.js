// export const addToWatchList = (movie) => {
//     const watchList = JSON.parse(localStorage.getItem('watchList')) || [];
//     if (!watchList.some(m => m.id === movie.id)) {
//         watchList.push(movie);
//         localStorage.setItem('watchList', JSON.stringify(watchList));
//     }
// }

// export const removeFromWatchList = (movieId) => {
//     const watchList = JSON.parse(localStorage.getItem('watchList')) || [];
//     const updatedList = watchList.filter(m => m.id !== movieId);
//     localStorage.setItem('watchList', JSON.stringify(updatedList));
// }

// export const getWatchList = () => {
//     return JSON.parse(localStorage.getItem('watchList')) || [];
// }
