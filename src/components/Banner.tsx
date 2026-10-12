import bannerStack from "../assets/banner-stack.png";

function Banner() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:flex-1 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
          Build Your Ideal <br />
          <span className="text-brand">Development Stack</span>
        </h1>
        <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
          <a
            href="#technologies"
            className="bg-brand text-white text-sm font-medium px-5 py-2.5 rounded-md cursor-pointer hover:opacity-90"
          >
            Explore Technologies
          </a>
          <button className="border border-gray-200 text-gray-700 text-sm font-medium px-8 py-2.5 rounded-md cursor-pointer hover:bg-gray-50">
            Learn More
          </button>
        </div>
      </div>
      <div className="lg:flex-1 flex justify-center">
        <img
          src={bannerStack}
          alt="Stacked layers of development technologies"
          className="w-full max-w-sm lg:max-w-md"
        />
      </div>
    </section>
  );
}
export default Banner;
