'use server';
import { revalidatePath } from 'next/cache';

// Initialize a mock watchList in memory
let watchList = [];

export async function addToWatchList(movie) {
    // Check if the movie is already in the watchList
    if (!watchList.find((m) => m.id === movie.id)) {
        watchList.push(movie);
    }
    revalidatePath('/watchList'); // Revalidate the watchList page
    return watchList;
}

export async function removeFromWatchList(movieId) {
    watchList = watchList.filter((m) => m.id !== movieId);
    revalidatePath('/watchList'); // Revalidate the watchList page
    return watchList;
}

export async function getWatchList() {
    return watchList;
}
