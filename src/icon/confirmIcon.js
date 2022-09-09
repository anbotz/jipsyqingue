const ConfirmIcon = ({ size, onClick }) => {
  return (
    <div  className="clickable-icon" onClick={onClick}>
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
          <path
            fill="#b1cc33"
            d="m61.5 23.3-8.013-8.013-25.71 25.71-9.26-9.26-8.013 8.013 17.42 17.44z"
          />
        </g>
        <g id="line">
          <path
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="m10.5 39.76 17.42 17.44 33.58-33.89-8.013-8.013-25.71 25.71-9.26-9.26z"
          />
        </g>
      </svg>
    </div>
  );
};

export default ConfirmIcon;