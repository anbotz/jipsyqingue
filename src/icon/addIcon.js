const AddIcon = ({ size, onClick }) => {
  return (
    <div className="clickable-icon" onClick={onClick}>
      <svg
        height={size || "72"}
        id="emoji"
        viewBox="0 0 72 72"
        xmlns="http://www.w3.org/2000/svg"
      >
        <link
          xmlns=""
          type="text/css"
          rel="stylesheet"
          id="dark-mode-custom-link"
        />
        <link
          xmlns=""
          type="text/css"
          rel="stylesheet"
          id="dark-mode-general-link"
        />
        <style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style" />
        <style xmlns="" lang="en" type="text/css" id="dark-mode-native-style" />
        <style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet" />
        <g id="color">
          <circle
            cx="36.0731"
            cy="35.9518"
            r="22.7702"
            fill="#B1CC33"
            stroke="none"
          />
        </g>
        <g id="hair" />
        <g id="skin" />
        <g id="skin-shadow" />
        <g id="line">
          <line
            x1="36.0731"
            x2="36.0731"
            y1="22.3267"
            y2="49.5769"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <line
            x1="49.6982"
            x2="22.4479"
            y1="35.9518"
            y2="35.9518"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <circle
            cx="36.0731"
            cy="35.9518"
            r="23"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
};

export default AddIcon;
