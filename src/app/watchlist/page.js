"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import { getWatchList } from '../actions/watchListActions';
import Link from 'next/link';
import useWatchListStore from '../store/store';


const WatchList = () => {
    const { watchList, removeMovie, loadWatchList } = useWatchListStore();

    // Load the watchList on initial render
    useEffect(() => {
        loadWatchList();
    }, [loadWatchList]);


    console.log('wat page---', watchList);
    // const [watchList, setWatchList] = useState([]);

    // useEffect(() => {
    //     // const storedWatchList = getWatchList();
    //     const storedWatchList = JSON.parse(localStorage.getItem('watchList')) || [];
    //     setWatchList(storedWatchList);
    // }, []);

    // const handleRemoveFromWatchList = (movie) => {
    //     const watchList = JSON.parse(localStorage.getItem('watchList')) || [];
    //     const updatedList = watchList.filter((m) => m.id !== movie.id);
    //     localStorage.setItem('watchList', JSON.stringify(updatedList));
    // };



    return (
        <div className="container mx-auto py-8">
            {watchList?.length === 0 ? (
                <div className='dark:bg-gray-800 h-[50vh] bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full'>
                    <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">You watch List is Empty</p>
                </div>
            ) : (
                <div className='flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full'>

                    <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Your Watch List</p>

                    {watchList?.map((movie, i) => (

                        <div key={i} className="mt-4 border-b border-gray-200 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                            <div className="pb-4 md:pb-8 w-full md:w-40">
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                                    alt={movie.title}
                                    width={50}
                                    height={50}
                                    className="w-full hidden md:block"
                                />

                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                                    alt={movie?.title}
                                    width={50}
                                    height={50}
                                    className="w-full md:hidden"
                                />
                            </div>
                            <div className=" md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{movie?.title}</h3>
                                    <div className="flex justify-start items-start flex-col space-y-2">
                                        <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-400">Release Date: </span>{movie?.release_date}</p>
                                        <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-400">Popularity: </span>{movie?.popularity}</p>

                                    </div>
                                    <Link href={`/movie/${movie?.id}`} className=" bg-green-400 hover:bg-green-600 transition-all ease-in p-2 rounded-md dark:text-white xl:text-sm font-semibold leading-6 text-gray-800">Details</Link>
                                </div>
                                <div className="flex justify-between space-x-8 items-start w-full">
                                    <p className="text-base dark:text-white xl:text-lg leading-6"> <span className="text-red-300 line-through"></span></p>
                                    <p className="text-base dark:text-white xl:text-lg leading-6"> <span className="text-red-300 line-through"></span></p>
                                    <button onClick={() => removeMovie(movie?.id)} className=" bg-red-400 hover:bg-red-600 transition-all ease-in p-2 rounded-md dark:text-white xl:text-sm font-semibold leading-6 text-gray-800">Delete</button>
                                </div>
                            </div>
                        </div>


                    ))}
                </div>
            )
            }
        </div >
    );
};

export default WatchList;