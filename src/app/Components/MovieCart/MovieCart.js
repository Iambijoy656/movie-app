
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiHeart } from "react-icons/ci";

const MovieCart = ({ movie }) => {
    return (
        <>

            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <Link href={`/movie/${movie?.id}`}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie?.title}
                        width={200}
                        height={300}
                        layout="responsive"
                        loading="lazy"
                    />

                    <div className="px-4 py-3 w-72">
                        {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                        <p className="text-lg font-bold text-black truncate block capitalize">{movie?.title}</p>
                        <div className="flex items-center">
                            <p className=" text-gray-500 cursor-auto my-3">Release: {movie?.release_date}</p>

                            {/* <div className="ml-auto">
                                <CiHeart className='font-bold text-3xl hover:text-red-500 cursor-pointer' />

                            </div> */}
                        </div>
                    </div>
                </Link>
            </div>

            {/* <div key={movie.id} className="mb-8">
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie?.title}
                    width={200}
                    height={300}
                    layout="responsive"
                    loading="lazy"
                />
                <h3 className="text-lg font-bold mt-2 text-red-800">{movie.title}</h3>
            </div> */}
        </>


    );
};

export default MovieCart;