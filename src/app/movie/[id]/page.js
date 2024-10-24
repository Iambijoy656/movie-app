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
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
            <div className="flex flex-col md:flex-row gap-4">
                {/* Movie Poster */}
                <div className="flex-shrink-0">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        width={500}
                        height={750}
                        className="rounded-lg"
                    />
                </div>

                {/* Movie Details */}
                <div className="flex-grow">
                    {/* Full Description */}
                    <p className="text-lg mb-4">
                        <strong>Overview:</strong> {movie.overview}
                    </p>

                    {/* Genres */}
                    <p className="text-lg mb-2">
                        <strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}
                    </p>

                    {/* Release Date */}
                    <p className="text-lg mb-2">
                        <strong>Release Date:</strong> {movie.release_date}
                    </p>

                    {/* Cast */}
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold mb-2">Top Cast</h2>
                        <ul>
                            {cast.map(actor => (
                                <li key={actor.cast_id} className="text-lg mb-2">
                                    {actor.name} as {actor.character}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;