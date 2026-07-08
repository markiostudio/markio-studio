import { TrendingUp } from "lucide-react";

type MetricCardProps = {
  label: string;
  value: string;
  change: string;
};

export function MetricCard({ label, value, change }: MetricCardProps) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#09090B] p-3">
      <p className="text-[10px] font-medium text-zinc-500">{label}</p>
      <p className="mt-1 text-lg font-bold text-white">{value}</p>
      <div className="mt-1 flex items-center gap-1 text-[10px] font-medium text-emerald-400">
        <TrendingUp className="h-3 w-3" />
        {change}
      </div>
    </div>
  );
}

export function MiniAreaChart() {
  const points = [20, 35, 28, 45, 38, 55, 48, 62, 58, 72, 68, 85];
  const max = Math.max(...points);
  const width = 280;
  const height = 60;
  const step = width / (points.length - 1);

  const linePath = points
    .map((p, i) => {
      const x = i * step;
      const y = height - (p / max) * height;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const areaPath = `${linePath} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="mt-4 h-16 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#chartGradient)" />
      <path d={linePath} fill="none" stroke="#7C5CFF" strokeWidth="2" />
    </svg>
  );
}
