interface Props {
  percentage: number;
  completed: number;
  total: number;
}

export default function ProgressBar({ percentage, completed, total }: Props) {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-sm text-gray-500">
          {completed} de {total} módulos completados
        </span>
        <span className="text-sm font-semibold text-gray-900">{percentage}%</span>
      </div>

      <div className="w-full bg-gray-100 rounded-full h-1.5">
        <div
          className="h-1.5 rounded-full bg-gray-900 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}