import { useEffect } from "react";
import { VIDEO_API, options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSrc } from "../utils/movieSlice";

const VideoTitle = function ({ movie }) {
  const src = useSelector((store) => store.movie.src);
  const dispatch = useDispatch();

  async function getMovieVideo() {
    try {
      let res = await fetch(
        VIDEO_API + `${movie.id}/videos?language=en-US`,
        options
      );
      let json = await res.json();
      let src = json?.results?.find((v) => {
        return v.type === "Trailer";
      });
      if (src.key == src) return;
      dispatch(addSrc(src.key));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovieVideo();
  }, [src]);

  return (
    <div className="mt-2 md:mt-10 lg:my-auto">
      <div className="max-w-xl px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 lg:whitespace-nowrap">
          {movie.original_title}
        </h2>
        <p className="text-sm md:text-base">{movie.overview}</p>
        <div className="flex mt-6">
          <button className="px-4 py-1 md:px-6 md:py-2 text-sm bg-neutral-200 rounded-md text-black md:hover:bg-neutral-400 flex items-center gap-1">
            <svg
              width="17"
              height="17"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
                fill="currentColor"
              ></path>
            </svg>
            <span>Play Now</span>
          </button>
          <button className="ml-4 px-4 py-1 md:px-6 md:py-2 text-sm bg-slate-100/30 rounded-md backdrop-blur-md md:hover:bg-slate-100/40 flex items-center gap-2">
            <svg
              width="17"
              height="17"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                fill="currentColor"
              ></path>
            </svg>
            <span>More info</span>
          </button>
        </div>
      </div>
      {src ? (
        <iframe
          className="absolute top-0 w-full h-full -z-10 bg-black"
          src={
            "https://www.youtube.com/embed/" +
            src +
            "?&loop=1&autoplay=0&controls=0&disablekb=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="absolute top-0 w-full h-full -z-10 bg-black"></p>
      )}
    </div>
  );
};

export default VideoTitle;
