const MinusIcon = ({ size, onClick }) => {
  return (
    <div onClick={onClick}>
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
          <polyline
            fill="#D0CFCE"
            stroke="none"
            points="59.9656,40.6667 13.9656,40.6667 13.9656,30.7614 59.9572,30.7614"
          />
        </g>
        <g id="hair" />
        <g id="skin" />
        <g id="skin-shadow" />
        <g id="line">
          <rect
            x="31.5039"
            y="12.5953"
            width="10.2956"
            height="46.3303"
            transform="matrix(6.123234e-17 -1 1 6.123234e-17 0.8912 72.4122)"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
        </g>
      </svg>
    </div>
  );
};

export default MinusIcon;
