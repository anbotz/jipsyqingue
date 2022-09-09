const NumberSixIcon = ({ size, onClick }) => {
  return (
    <div className="clickable-icon" onClick={onClick}>
      <svg
        height={size || "72"}
        id="emoji"
        viewBox="0 0 72 72"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="color">
          <rect
            x="11.875"
            y="12.1243"
            width="48"
            height="47.834"
            fill="#d0cfce"
          />
        </g>
        <g id="line">
          <rect
            x="12.125"
            y="11.8743"
            width="48"
            height="48"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <circle
            cx="36.125"
            cy="39.9125"
            r="4.6594"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="36.125"
            x2="32.3088"
            y1="27.1767"
            y2="37.2428"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
};

export default NumberSixIcon;
