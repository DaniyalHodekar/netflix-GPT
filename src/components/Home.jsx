import Header from "./Header";

export default function Home() {
  return (
    <div className="movie-bg relative">
      <div className="relative z-10">
        <Header />
        <h1 className="leading-snug px-5 mx-auto max-w-5xl text-center mt-14 font-bold md:font-extrabold text-3xl md:text-4xl lg:text-5xl  sm:mt-24 lg:mt-32 lg:leading-tight">
          The Biggest hits. Ready to watch here from $69.
        </h1>
        <h2 className="my-5 tracking-tight md:tracking-normal text-lg lg:text-2xl px-4 text-center">
          Join today. Cancel anytime.
        </h2>
        <h2 className="mb-3 tracking-tight md:tracking-normal text-lg px-4 text-center lg:text-xl">
          Ready to explore? Sign up and start your journey.
        </h2>
      </div>
    </div>
  );
}
