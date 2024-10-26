// watchListStore.js
import { create } from 'zustand';

const useWatchListStore = create((set, get) => ({
    watchList: [],


    addMovie: (movie) => {
        set((state) => ({
            watchList: [...state.watchList, movie],
        }));
        get().persistWatchList();
    },


    removeMovie: (movieId) => {
        set((state) => ({
            watchList: state.watchList.filter((movie) => movie.id !== movieId),
        }));
        get().persistWatchList();
    },

    persistWatchList: () => {
        const watchList = JSON.stringify(get().watchList);
        localStorage.setItem('watchList', watchList);
    },


    loadWatchList: () => {
        const storedList = localStorage.getItem('watchList');
        if (storedList) {
            set({ watchList: JSON.parse(storedList) });
        }
    },
}));


useWatchListStore.getState().loadWatchList();

export default useWatchListStore;
