"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCart from './Components/MovieCart/MovieCart';
import ResponsivePagination from 'react-responsive-pagination';
import Loading from './loading';



const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPages] = useState()
  const [hasMore, setHasMore] = useState(true);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchMovies = async () => {
    setLoading(true);
    const res = await axios.get(
      // `https://api.themoviedb.org/3/movie/popular?api_key=f58ec701aa208fa84515ba18cdba1613`
      `https://api.themoviedb.org/3/movie/popular?api_key=f58ec701aa208fa84515ba18cdba1613&page=${page}`
    );
    // setMovies((prevMovies) => [...prevMovies, ...res.data.results]);
    setTotalPages(res?.data?.total_pages);
    setMovies(res?.data?.results);
    setLoading(false);
    if (res?.data?.page >= res?.data?.total_pages) {
      setHasMore(false);
    }
  };



  const searchMovies = async (query) => {
    if (query.length > 0) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=f58ec701aa208fa84515ba18cdba1613&query=${query}`
      );
      setSearchResults(res?.data?.results);
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!query) {
        fetchMovies();
      }
    }
  }, [page, query]);


  if (loading && movies?.length === 0) {
    return <div><Loading /></div>;
  }

  const handleSearch = (e) => {
    setQuery(e.target.value);
    searchMovies(e.target.value);
  };

  const handlePageChange = (page) => {
    setPage(page);
  }


  return (
    <div suppressHydrationWarning>
      <section className="w-full">
        <div
          className="w-full h-[70vh] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center"
          style={{
            backgroundImage:
              "url('https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg')",
          }}
        >
          <div>
            <h1 className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm">
              Download the perfect netflix pictures
            </h1>
          </div>
          <div className="w-full mx-auto">
            <form>
              <div className="xl:w-1/2 lg:w-[60%] md:w-[70%] sm:w-[70%] xs:w-[90%] mx-auto flex gap-2 md:mt-6 xs:mt-4 ">
                <input
                  type="search"
                  value={query}
                  onChange={handleSearch}
                  placeholder="Search for movies..."
                  className="mb-8 p-2 border border-gray-300 rounded w-full"
                />

              </div>
            </form>
          </div>
        </div>
      </section>

      <div
        className="container mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-bold mb-8 text-rose-600">Popular Movies</h1>
        <InfiniteScroll
          dataLength={query ? searchResults.length : movies.length}
          next={() => setPage((prevPage) => prevPage + 1)}
          hasMore={hasMore}
          // loader={<h4>Loading...</h4>}
          endMessage={<p>No more movies to load</p>}
        >
          <div
            className=" w-full grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-4 mt-10 mb-5"
          // className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {(query ? searchResults : movies).map((movie, i) => (
              <MovieCart key={i} movie={movie} />

            ))}
          </div>
        </InfiniteScroll>
      </div>


      <div className='my-5 container mx-auto'>

        {/* manual */}
        {/* <Pagination
        setPageNumber={setPage}
        updatePageNumber={updatePageNumber}
        pageNumber={page}
        page={totalPage}

      /> */}

        {/* react pagination */}
        <ResponsivePagination
          current={page}
          total={totalPage}
          onPageChange={(page) => handlePageChange(page)}
        />
      </div>
    </div>
  );
};

export default Home;
