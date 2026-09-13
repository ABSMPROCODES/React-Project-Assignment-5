
import type { Tprops } from '../type';

const YourStack = ({
  stack,
  onRemove,
  onClear,
}: {
  stack: Tprops[];
  onRemove: (id: string) => void;
  onClear: () => void;
}) => {
  return (
    <div className="w-full lg:w-[340px] bg-white border border-slate-200 rounded-[24px] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] h-fit lg:sticky lg:top-24">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">
            Your Tech Stack
          </h2>

          <span className="text-sm font-semibold text-slate-500">
            {stack.length}
          </span>
        </div>

        <p className="text-sm text-slate-500 mt-1">
          Build your stack by selecting technologies
        </p>
      </div>

      <div className="space-y-3">
        {stack.length === 0 ? (
          <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center">
            <p className="text-sm text-slate-400">
              Your stack is empty.
            </p>

            <p className="text-xs text-slate-400 mt-1">
              Add technologies from the cards.
            </p>
          </div>
        ) : (
          stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between gap-3 border border-blue-200 rounded-xl p-3 bg-blue-50/30"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg border border-slate-100 flex items-center justify-center bg-white shrink-0">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-7 h-7 object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-slate-800 truncate">
                    {tech.name}
                  </h3>

                  <p className="text-xs text-slate-400">
                    {tech.category}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name}`}
                className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg border border-red-100 text-red-500 hover:bg-red-50 hover:border-red-200 transition-colors"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {stack.length > 0 && (
        <div className="mt-6 pt-4 border-t border-slate-200">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs text-slate-400">
              {stack.length}{' '}
              {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
            </p>

            <button
              type="button"
              onClick={onClear}
              className="text-sm font-semibold text-red-500 hover:text-red-600 transition-colors"
            >
              Remove All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YourStack;