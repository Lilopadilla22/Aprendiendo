interface Props {
  percentage: number;
}

export default function ProgressBar({ percentage }: Props) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-medium">
        Progreso general: {percentage}%
      </p>

      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-primary h-4 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}