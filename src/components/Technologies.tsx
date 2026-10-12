import { Suspense, use } from "react";
import type { Technology } from "../types";
import TechCard from "./TechCard";

// const technologiesPromise: Promise<Technology[]> = fetch(
//   "/Technologies.json",
// ).then((res) => res.json());

async function loadTechnologies(): Promise<Technology[]> {
  const res = await fetch("/Technologies.json");
  const data = await res.json();
  return data;
}

const technologiesPromise = loadTechnologies();

// The grid: gets the list, makes one TechCard per technology
function TechGrid() {
  const technologies = use(technologiesPromise);

  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {technologies.map((tech) => ( //if we use ( instead of {, we dont need to return, it will return automatically

        <TechCard key={tech.id} prop={tech}></TechCard>
      ))}
    </div>
  );
}
const Technologies = () => {
  return (
    <section id="technologies" className="max-w-6xl mx-auto px-4 py-16 scroll-mt-20">
      <div className="text-center lg:text-left">
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
              <span className="loading loading-spinner loading-lg text-pink-500"></span>
            </div>
          }
        >
          <TechGrid />
        </Suspense>

        <aside className="w-full lg:w-72 lg:sticky lg:top-24 bg-white border border-gray-300 rounded-xl p-5">
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
