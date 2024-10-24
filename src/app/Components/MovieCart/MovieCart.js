
import Image from 'next/image';
import React from 'react';

const MovieCart = ({ movie }) => {
    return (
        <div key={movie.id} className="mb-8">
            <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                // src={`https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d3130c112617081.60181f67660c8.jpg`}
                alt={movie?.title}
                width={200}
                height={300}
                layout="responsive"
                loading="lazy"
            />
            <h3 className="text-lg font-bold mt-2 text-red-800">{movie.title}</h3>
        </div>
    );
};

export default MovieCart;