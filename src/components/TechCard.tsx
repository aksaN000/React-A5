import type { Technology } from "../types";

// Which badge colour each category gets.
// Full class names on purpose: Tailwind only creates CSS for class names it can read in our files.
const BADGE_COLORS: Record<string, string> = {
  Frontend: "bg-sky-50 text-sky-700",
  Backend: "bg-emerald-50 text-emerald-700",
  Database: "bg-violet-50 text-violet-700",
  Language: "bg-amber-50 text-amber-700",
  Styling: "bg-pink-50 text-pink-700",
  DevOps: "bg-slate-100 text-slate-700",
};

type TechCardProps = {
  prop: Technology;
};

function TechCard({ prop }: TechCardProps) {
  const badgeColor = BADGE_COLORS[prop.category] ?? "bg-gray-100 text-gray-700";

  return (
    <article className="bg-white border border-gray-300 rounded-xl p-5 flex flex-col transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-gray-400">
      <div className="flex items-start justify-between">
        <img src={prop.icon} alt={prop.name} className="size-10 rounded-lg bg-gray-50 p-1.5 object-contain" />
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeColor}`}>{prop.badge}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{prop.name}</h3>
      <p className="mt-1 text-sm text-gray-500 leading-relaxed">{prop.description}</p>
      <div className="mt-auto pt-4 flex items-center justify-between text-xs text-gray-500">
        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">{prop.category}</span>
        <span>{prop.difficulty}</span>
        <span><span className="text-amber-400">★</span> {prop.rating}</span>
      </div>
      <button className="mt-4 w-full bg-gray-900 text-white text-sm font-medium py-2.5 rounded-lg cursor-pointer transition-colors hover:bg-gray-700 active:scale-[0.98]">
        Add to Stack
      </button>
    </article>
  );
}

export default TechCard;
