export default function Logo() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-12 h-12"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hands */}
      {/* Blue hand (left) */}
      <path
        d="M 50 120 Q 40 100 50 80 Q 60 70 75 75 Q 80 90 75 110 Q 70 125 55 130 Z"
        fill="#0052CC"
      />
      {/* Orange hand (right) */}
      <path
        d="M 150 120 Q 160 100 150 80 Q 140 70 125 75 Q 120 90 125 110 Q 130 125 145 130 Z"
        fill="#FF8C00"
      />

      {/* Green base */}
      <ellipse cx="100" cy="140" rx="60" ry="30" fill="#22C55E" />

      {/* House */}
      {/* Roof */}
      <path
        d="M 70 90 L 100 50 L 130 90 Z"
        fill="#FF8C00"
        stroke="#0052CC"
        strokeWidth="2"
      />
      {/* House body */}
      <rect x="75" y="90" width="50" height="40" fill="white" stroke="#0052CC" strokeWidth="2" />
      {/* Windows */}
      <rect x="85" y="100" width="8" height="8" fill="#0052CC" />
      <rect x="97" y="100" width="8" height="8" fill="#0052CC" />
      <rect x="85" y="112" width="8" height="8" fill="#0052CC" />
      <rect x="97" y="112" width="8" height="8" fill="#0052CC" />

      {/* Sun */}
      <circle cx="140" cy="40" r="12" fill="#FFA500" />
      <line x1="140" y1="20" x2="140" y2="10" stroke="#FFA500" strokeWidth="2" />
      <line x1="160" y1="40" x2="170" y2="40" stroke="#FFA500" strokeWidth="2" />
      <line x1="155" y1="25" x2="162" y2="18" stroke="#FFA500" strokeWidth="2" />
    </svg>
  )
}
