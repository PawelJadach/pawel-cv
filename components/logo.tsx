export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="8"
        y="8"
        width="16"
        height="16"
        rx="2"
        fill="currentColor"
        className="text-violet-700"
        opacity="0.9"
      />
      <rect
        x="16"
        y="16"
        width="16"
        height="16"
        rx="2"
        fill="currentColor"
        className="text-violet-500"
      />
    </svg>
  );
}
