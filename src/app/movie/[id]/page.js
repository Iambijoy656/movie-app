import React from 'react';
import Image from 'next/image';
import MovieCart from '@/app/Components/MovieCart/MovieCart';
import WatchListButtons from '@/app/Components/WatchlistButtons/WatchlistButtons';
import { movieSchema, recommendationsSchema } from '@/app/schemas/movieSchema';

const MovieDetails = async ({ params }) => {
    const id = await params?.id;


    const [movieRes, creditsRes, recommendationsRes] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f58ec701aa208fa84515ba18cdba1613`, {
            cache: "force-cache",
            next: { revalidate: 60 },
        }),
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f58ec701aa208fa84515ba18cdba1613`, {
            cache: "force-cache",
        }),
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=f58ec701aa208fa84515ba18cdba1613`, {
            cache: "force-cache",
            next: { revalidate: 60 },
        })
    ]);

    // Handle fetch errors
    if (!movieRes?.ok || !creditsRes?.ok || !recommendationsRes?.ok) {
        throw new Error('Failed to fetch movie data');
    }

    // Parse responses
    const movieData = await movieRes.json();
    const credits = await creditsRes.json();
    const recommendationsData = await recommendationsRes.json();

    // Validate the responses
    const movie = movieSchema.parse(movieData);
    const recommendations = recommendationsSchema.parse(recommendationsData);



    // Get top 5 cast members
    const cast = credits.cast.slice(0, 5);




    return (
        <>
            <div
                className={` h-[250px]  w-full bg-center bg-cover`}
                style={{
                    backgroundImage: `url(
            "https://ik.imagekit.io/maynuddin/tiggzy-it-restaurant/contact.webp")`,
                }}
            >
                <div>
                    <div>
                        <div className=" pt-36 pb-3">
                            <h2 className="text-3xl  font-big font-extrabold text-center text-white">
                                Movie Details
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-2">
                        <div className="md:flex-1 px-4">
                            <div className="rounded-lg  mb-4 mx-auto">
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    width={550}
                                    height={150}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="md:flex-1 px-2">
                            <h2 className="text-2xl font-bold text-gray-200 mb-2">{movie.title}</h2>
                            <p className="text-gray-300 text-sm mb-4">
                                {movie.overview}
                            </p>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-300 ">Release Date: </span>
                                    <span className="text-gray-400 ">{movie?.release_date}</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-300 ">Popularity: </span>
                                    <span className="text-gray-400 ">{movie?.popularity}</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-400 ">Genres:</span>
                                <div className="flex items-center mt-2">
                                    {movie.genres.map((genre, i) => (
                                        <button key={i} className="bg-gray-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                                            {genre.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="mt-4">
                                    <h2 className="font-bold text-gray-300 ">Top Cast</h2>
                                    <ul>
                                        {cast.map(actor => (
                                            <li key={actor.cast_id} className="my-2 text-gray-400 list-disc">
                                                {actor.name} as {actor.character}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex -mx-2 my-4">
                                <WatchListButtons movie={movie} />

                            </div>
                        </div>
                    </div>

                    {/* Recommendations Section */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Recommended Movies</h2>
                        <div
                            className=" w-full grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-4 mt-10 mb-5"

                        >
                            {recommendations?.results?.map((movie, i) => (
                                <MovieCart key={i} movie={movie} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieDetails;
