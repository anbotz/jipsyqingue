
const OverviewIcon = ({ size, onClick }) => {
  return (
    <div className="clickable-icon" onClick={onClick}>
      <svg id="emoji" viewBox="0 0 72 72" height={size || "72"} xmlns="http://www.w3.org/2000/svg">
        <g id="color">
          <rect x="24" y="18" width="36" height="7" fill="#D0CFCE" stroke="none"/>
          <rect x="24" y="33" width="36" height="7" fill="#D0CFCE" stroke="none"/>
          <rect x="24" y="48" width="36" height="7" fill="#D0CFCE" stroke="none"/>
          <rect x="12" y="48" width="7" height="7" fill="#9B9B9A" stroke="none"/>
          <rect x="12" y="33" width="7" height="7" fill="#9B9B9A" stroke="none"/>
          <rect x="12" y="18" width="7" height="7" fill="#9B9B9A" stroke="none"/>
        </g>
        <g id="hair"/>
        <g id="skin"/>
        <g id="skin-shadow"/>
        <g id="line">
          <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M59,25H25c-0.5523,0-1-0.4477-1-1v-5c0-0.5523,0.4477-1,1-1h34c0.5523,0,1,0.4477,1,1v5C60,24.5523,59.5523,25,59,25z"/>
          <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M59,40H25c-0.5523,0-1-0.4477-1-1v-5c0-0.5523,0.4477-1,1-1h34c0.5523,0,1,0.4477,1,1v5C60,39.5523,59.5523,40,59,40z"/>
          <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M59,55H25c-0.5523,0-1-0.4477-1-1v-5c0-0.5523,0.4477-1,1-1h34c0.5523,0,1,0.4477,1,1v5C60,54.5523,59.5523,55,59,55z"/>
          <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M18,25h-5c-0.5523,0-1-0.4477-1-1v-5c0-0.5523,0.4477-1,1-1h5c0.5523,0,1,0.4477,1,1v5C19,24.5523,18.5523,25,18,25z"/>
          <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M18,40h-5c-0.5523,0-1-0.4477-1-1v-5c0-0.5523,0.4477-1,1-1h5c0.5523,0,1,0.4477,1,1v5C19,39.5523,18.5523,40,18,40z"/>
          <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M18,55h-5c-0.5523,0-1-0.4477-1-1v-5c0-0.5523,0.4477-1,1-1h5c0.5523,0,1,0.4477,1,1v5C19,54.5523,18.5523,55,18,55z"/>
        </g>
      </svg>
    </div>
  );
};

export default OverviewIcon;