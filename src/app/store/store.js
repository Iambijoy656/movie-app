// watchListStore.js
import { create } from 'zustand';

// Zustand store setup
const useWatchListStore = create((set, get) => ({
    watchList: [],

    // Add movie and persist to localStorage
    addMovie: (movie) => {
        set((state) => ({
            watchList: [...state.watchList, movie],
        }));
        get().persistWatchList(); // Persist after adding
    },

    // Remove movie and persist to localStorage
    removeMovie: (movieId) => {
        set((state) => ({
            watchList: state.watchList.filter((movie) => movie.id !== movieId),
        }));
        get().persistWatchList(); // Persist after removing
    },

    // Persist watchList to localStorage
    persistWatchList: () => {
        const watchList = JSON.stringify(get().watchList);
        localStorage.setItem('watchList', watchList);
    },

    // Load watchList from localStorage
    loadWatchList: () => {
        const storedList = localStorage.getItem('watchList');
        if (storedList) {
            set({ watchList: JSON.parse(storedList) });
        }
    },
}));

// Automatically load watchList when the store initializes
useWatchListStore.getState().loadWatchList();

export default useWatchListStore;
