import { Suspense, use } from "react";
import type { Technology } from "../types";

// const technologiesPromise: Promise<Technology[]> = fetch(
//   "/Technologies.json",
// ).then((res) => res.json());

async function loadTechnologies(): Promise<Technology[]> {
  const res = await fetch("/Technologies.json");
  const data = await res.json();
  return data;
}

const technologiesPromise = loadTechnologies();

//Card component
function TechGrid() {
  const technologies = use(technologiesPromise);

  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <p>{technologies.length} technologies loaded</p>

      <article className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col">
        <div className="flex items-start justify-between">
          <div className="size-10 rounded-lg bg-sky-50 text-sky-600 font-bold flex items-center justify-center">
            R
          </div>
          <span className="text-xs font-medium text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full">
            Popular
          </span>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">React</h3>
        <p className="mt-1 text-sm text-gray-500 leading-relaxed">
          A declarative, component-based JavaScript library for building modern
          user interfaces.
        </p>
        <div className="mt-auto pt-4 flex items-center justify-between text-xs text-gray-500">
          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
            Frontend
          </span>
          <span>Beginner-Friendly</span>
          <span>
            <span className="text-amber-400">★</span> 4.9
          </span>
        </div>
        <button className="mt-4 w-full bg-gray-900 text-white text-sm font-medium py-2.5 rounded-lg cursor-pointer hover:bg-gray-800">
          Add to Stack
        </button>
      </article>
    </div>
  );
}
const Technologies = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Explore the <span className="text-brand">Technologies</span>
        </h2>
        <p className="mt-2 text-gray-500">
          Pick one technology per category to build your ideal stack
        </p>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row lg:items-start gap-6">
        <Suspense
          fallback={
            <div className="flex-1 flex justify-center py-20">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          }
        >
          <TechGrid />
        </Suspense>

        <aside className="w-full lg:w-72 lg:sticky lg:top-24 bg-white border border-gray-100 rounded-xl p-5">
          <h3 className="font-semibold text-gray-900">Your Stack</h3>
          <p className="mt-1 text-xs text-gray-400">
            No technologies selected yet.
          </p>
          <div className="mt-4 border border-dashed border-gray-200 rounded-lg py-8 text-center text-sm text-gray-400">
            Your stack is empty.
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Technologies;
