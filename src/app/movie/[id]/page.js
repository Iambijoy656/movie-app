import React from 'react';
import Image from 'next/image';

const MovieDetails = async ({ params }) => {
    const { id } = params;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f58ec701aa208fa84515ba18cdba1613`, {
        cache: "force-cache",
        next: { revalidate: 60 },
    });

    if (!res?.ok) {
        throw new Error('Failed to fetch movie data');
    }
    const movie = await res.json();

    const resCredits = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f58ec701aa208fa84515ba18cdba1613`);

    if (!resCredits.ok) {
        throw new Error('Failed to fetch credits');
    }

    const credits = await resCredits.json(); // Parse credits (cast)
    const cast = credits.cast.slice(0, 5); // Get top 5 cast members


    console.log('credits', credits);
    console.log('cast', cast);



    return (
        // <div className="container mx-auto p-4">
        //     <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        //     <div className="flex flex-col md:flex-row gap-4">
        //         {/* Movie Poster */}
        //         <div className="flex-shrink-0">
        //             <Image
        //                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        //                 alt={movie.title}
        //                 width={500}
        //                 height={750}
        //                 className="rounded-lg"
        //             />
        //         </div>

        //         {/* Movie Details */}
        //         <div className="flex-grow">
        //             {/* Full Description */}
        //             <p className="text-lg mb-4">
        //                 <strong>Overview:</strong> {movie.overview}
        //             </p>

        //             {/* Genres */}
        //             <p className="text-lg mb-2">
        //                 <strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}
        //             </p>

        //             {/* Release Date */}
        //             <p className="text-lg mb-2">
        //                 <strong>Release Date:</strong> {movie.release_date}
        //             </p>

        //             {/* Cast */}
        //             <div className="mt-4">
        //                 <h2 className="text-2xl font-bold mb-2">Top Cast</h2>
        //                 <ul>
        //                     {cast.map(actor => (
        //                         <li key={actor.cast_id} className="text-lg mb-2">
        //                             {actor.name} as {actor.character}
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            <div class="bg-gray-100 dark:bg-gray-800 py-8">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col md:flex-row -mx-4">
                        <div class="md:flex-1 px-4">
                            <div class=" rounded-lg  mb-4">
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    width={550}
                                    height={200}
                                    className="rounded-lg cover"
                                />
                            </div>

                        </div>
                        <div class="md:flex-1 px-4">
                            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{movie?.title}</h2>
                            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {movie?.overview}
                            </p>
                            <div class="flex mb-4">
                                <div class="mr-4">
                                    <span class="font-bold text-gray-700 dark:text-gray-300">Release Date: </span>
                                    <span class="text-gray-600 dark:text-gray-300">{movie?.release_date}</span>
                                </div>
                                <div>
                                    <span class="font-bold text-gray-700 dark:text-gray-300">Popularity: </span>
                                    <span class="text-gray-600 dark:text-gray-300">{movie?.popularity}</span>
                                </div>
                            </div>

                            <div class="mb-4">
                                <span class="font-bold text-gray-700 dark:text-gray-300">Genres:</span>
                                <div class="flex items-center mt-2">

                                    {movie.genres.map((genre, i) => (
                                        <button key={i} class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">{genre?.name}</button>
                                    ))}

                                </div>
                            </div>
                            <div>
                                <div className="mt-4">
                                    <h2 className="font-bold text-gray-700 dark:text-gray-300">Top Cast</h2>
                                    <ul>
                                        {cast.map(actor => (
                                            <li key={actor?.cast_id} className=" my-2 text-gray-600 list-disc">
                                                {actor?.name} as {actor?.character}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                            <div class="flex -mx-2 my-4">
                                <div class="w-1/2 px-2">
                                    <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >


        </>
    );
};

export default MovieDetails;