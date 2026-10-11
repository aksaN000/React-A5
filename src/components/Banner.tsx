import bannerStack from "../assets/banner-stack.png";
function Banner() {
  return (
    <section>
      <div>
        <h1>
          Build Your Ideal <span>Development Stack</span>
        </h1>
        <p>
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div>
          <button>Explore Technologies</button>
          <button>Learn More</button>
        </div>
      </div>
      <div>
        <img
          src={bannerStack}
          alt="Stacked layers of development technologies"
        />
      </div>
    </section>
  );
}

export default Banner;
