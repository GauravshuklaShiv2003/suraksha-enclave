// The brand device: stacked rank chevrons, a nod to the uniformed forces.
export default function Chevron({ className = '', count = 3, strokeWidth = 1.4 }) {
  return (
    <svg viewBox={`0 0 40 ${8 + count * 8}`} className={className} fill="none" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <path
          key={i}
          d={`M4 ${4 + i * 8} L20 ${12 + i * 8} L36 ${4 + i * 8}`}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={1 - i * 0.22}
        />
      ))}
    </svg>
  );
}
