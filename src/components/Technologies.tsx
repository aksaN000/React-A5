import { Suspense, use, useState } from "react";
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
type TechGridProps = {
  onAdd: (tech: Technology) => void;
  stack: Technology[]; // the current stack, so we can disable the "Add" button for technologies already in the stack
};
function TechGrid({ onAdd, stack }: TechGridProps) {
  const technologies = use(technologiesPromise);

  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {technologies.map(
        (
          tech, //if we use ( instead of {, we dont need to return, it will return automatically
        ) => (
          <TechCard
            key={tech.id}
            prop_onAdd={onAdd}
            prop_added={stack.some((t) => t.id === tech.id)}
            prop_tech={tech}
          ></TechCard> //key is a name tag on each card, so React can tell the cards apart when the list changes.
        ),
      )}
    </div>
  );
}
const Technologies = () => {
  const [stack, setStack] = useState<Technology[]>([]);
  function addToStack(tech: Technology) {
    if (stack.some((t) => t.id === tech.id)) return; // already in the stack
    setStack([...stack, tech]);
  }
  return (
    <section
      id="technologies"
      className="max-w-6xl mx-auto px-4 py-16 scroll-mt-20"
    >
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
          <TechGrid onAdd={addToStack} stack={stack} />
        </Suspense>

        <aside className="w-full lg:w-72 lg:sticky lg:top-24 bg-white border border-gray-300 rounded-xl p-5">
          <h3 className="font-semibold text-gray-900">Your Stack</h3>
          <p className="mt-1 text-xs text-gray-400">
            {stack.length === 0
              ? "No technologies selected yet."
              : `${stack.length} ${stack.length === 1 ? "Technology" : "Technologies"} Selected`}
          </p>
          {stack.length === 0 ? (
            <div className="mt-4 border border-dashed border-gray-200 rounded-lg py-8 text-center text-sm text-gray-400">
              Your stack is empty.
            </div>
          ) : (
            <ul className="mt-4 flex flex-col gap-2">
              {stack.map((tech) => (
                <li
                  key={tech.id}
                  className="flex items-center gap-3 border border-gray-200 rounded-lg p-2"
                >
                  <img
                    src={tech.icon}
                    alt=""
                    className="size-8 rounded-md bg-gray-50 p-1 object-contain"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {tech.name}
                    </p>
                    <p className="text-xs text-gray-500">{tech.category}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>
    </section>
  );
};

export default Technologies;
