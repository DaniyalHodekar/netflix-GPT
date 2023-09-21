import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { VIDEO_API, options } from "../utils/constants";

export default function MoviePage() {
  const [key, setKey] = useState("");
  const [poster, setPoster] = useState(false);
  const [info, setInfo] = useState(false);
  const params = useParams();
  const movies = useSelector((store) => store.movie.all);

  let movie = movies.find((movie) => movie?.id === Number(params?.id));
  movie ||= movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    if (movie?.id) {
      getTrailer(movie.id);
    }
  }, [movie?.id]);

  async function getTrailer() {
    try {
      let res = await fetch(
        VIDEO_API + `${movie.id}/videos?language=en-US`,
        options
      );
      let json = await res.json();
      let src = json?.results?.find((v) => {
        return v.type === "Trailer";
      });
      setKey(src.key);
    } catch (error) {
      console.log(error);
    }
  }

  function handleInfo() {
    setInfo(!info);
  }

  return (
    <>
      {movies.length > 0 ? (
        <main
          className="h-screen overflow-hidden bg-black flex flex-col"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPositionX: "center",
          }}
        >
          <button
            className="self-start py-3 px-5 m-4 lg:m-10 text-3xl lg:py-5 lg:px-7 lg:text-5xl font-bold relative z-10 my-5 flex items-center bg-white/10 lg:hover:bg-white/20 backdrop-blur-md rounded-lg"
            onClick={handleInfo}
          >
            {movie?.original_title}
            <svg
              width="25"
              height="25"
              viewBox="0 0 15 15"
              className={
                "transition-transform ml-2 " + (info ? "" : "rotate-180")
              }
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
            </svg>
          </button>

          <>
            <div
              className={
                "duration-300 transition-colors absolute inset-0 " +
                (info ? "bg-black/70" : "bg-black/10")
              }
            ></div>
            <section
              className={
                "duration-300 transition-all z-10 px-4 lg:px-10 pb-10 " +
                (info ? "h-full overflow-auto" : "h-0 overflow-hidden pb-0")
              }
            >
              <p className="lg:text-lg max-w-4xl mb-7 lg:mb-10">
                {movie?.overview}
              </p>
              <button
                onClick={() => {
                  setPoster(true);
                }}
                className="px-4 bg-white/10 lg:hover:bg-white/20 py-2 rounded-md lg:text-lg lg:px-5 lg:py-3 mb-10 backdrop-blur-md"
              >
                View Movie Poster
              </button>
              {poster && (
                <div
                  onClick={() => {
                    setPoster(false);
                  }}
                  className="absolute inset-0 backdrop-blur-lg flex items-center justify-center p-5"
                >
                  <button
                    onClick={() => {
                      setPoster(false);
                    }}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 lg:hover:bg-white/20"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="movie poster"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  />
                  <button></button>
                </div>
              )}

              {key.length > 0 ? (
                <div>
                  <h2 className="text-2xl mb-4">Movie Trailer:</h2>
                  <iframe
                    className="w-full max-w-7xl aspect-video"
                    src={"https://www.youtube.com/embed/" + key}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <p>Couldn&apos;t get trailer.</p>
              )}
            </section>
          </>
        </main>
      ) : (
        <p className="absolute inset-0 bg-black"></p>
      )}
    </>
  );
}

// src={"https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path}
