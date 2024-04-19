const NumberOneIcon = ({ size, onClick }) => {
  return (
    <div className="clickable-icon" onClick={onClick}>
      <svg
        height={size || "72"}
        width={size || "72"}
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M27.299 2.246h-22.65c-1.327 0-2.402 1.076-2.402 2.402v22.65c0 1.327 1.076 2.402 2.402 2.402h22.65c1.327 0 2.402-1.076 2.402-2.402v-22.65c0-1.327-1.076-2.402-2.402-2.402zM15.974 19.093c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12z"></path>
      </svg>
    </div>
  );
};

export default NumberOneIcon;
