// components/ads/AdSlot.tsx
import clsx from "clsx";

type AdSlotProps = {
  slotName: string;               // unique id per placement
  className?: string;             // extra classes when needed
  height?: number;                // px height for the box
  label?: string;                 // small caption above the box
};

export default function AdSlot({
  slotName,
  className,
  height = 300,
  label = "Advertisement",
}: AdSlotProps) {
  // Later you’ll replace this with AdSense / sponsor snippet.
  const hasAds = false;

  return (
    <aside
      className={clsx(
        "rounded-xl border border-gray-800 bg-gray-900/50 p-4",
        className
      )}
      aria-label={label}
    >
      <div className="text-sm text-gray-400 mb-3">{label}</div>

      {hasAds ? (
        <div id={slotName} />
      ) : (
        <div
          className="relative w-full rounded-lg bg-gray-800/60 border border-gray-700 flex items-center justify-center"
          style={{ height }}
        >
          <span className="text-gray-500 text-sm">Your Ad Here</span>
        </div>
      )}
    </aside>
  );
}
