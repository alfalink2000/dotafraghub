type Props = {
  label: string;
  value: string | number;
  sub?: string;
};

export default function StatCard({ label, value, sub }: Props) {
  return (
    <div className="glass-card rounded-lg p-stack-md flex flex-col justify-center items-start transition-all duration-300 group">
      <span className="font-label-bold text-label-bold text-on-surface-variant uppercase mb-unit">
        {label}
      </span>
      <div className="flex items-end gap-2">
        <span className="font-display-md text-display-md text-secondary group-hover:text-primary transition-colors">
          {value}
        </span>
      </div>
      {sub && (
        <span className="mt-1 font-body-sm text-body-sm text-on-surface">{sub}</span>
      )}
    </div>
  );
}
