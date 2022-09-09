const NumberTwoIcon = ({ size, onClick }) => {
  return (
    <div className="clickable-icon" onClick={onClick}>
      <svg
        height={size || "72"}
        id="emoji"
        viewBox="0 0 72 72"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="color">
          <rect x="12" y="12.1663" width="48" height="47.834" fill="#d0cfce" />
        </g>
        <g id="line">
          <rect
            x="12.25"
            y="11.9163"
            width="48"
            height="48"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M31.03,31.4978a5.33,5.33,0,0,1,5.22-4.2544h0a5.3116,5.3116,0,0,1,3.7675,1.5606,4.1147,4.1147,0,0,1-.0458,5.5792l-9.05,10.206H41.5781"
          />
        </g>
      </svg>
    </div>
  );
};

export default NumberTwoIcon;
