const PlusIcon = ({ size, onClick }) => {
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
          <polygon
            fill="#D0CFCE"
            stroke="none"
            points="31.8532,29.8741 31.8532,12.521 42.1488,12.521 42.1488,29.8805 42.1967,29.8806 46.2484,29.8832 59.6052,29.8832 59.6052,40.1789 46.2562,40.1789 42.1493,40.1762 42.1488,40.206 42.1488,58.8513 31.8532,58.8513 31.8532,40.1694 31.7534,40.1693 27.9357,40.1667 14,40.1667 14,29.8711 27.9331,29.8711 31.7687,29.8737"
          />
        </g>
        <g id="hair" />
        <g id="skin" />
        <g id="skin-shadow" />
        <g id="line">
          <polygon
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            points="31.8532,29.8741 31.8532,12.521 42.1488,12.521 42.1488,29.8805 42.1967,29.8806 46.2484,29.8832 59.6052,29.8832 59.6052,40.1789 46.2562,40.1789 42.1493,40.1762 42.1488,40.206 42.1488,58.8513 31.8532,58.8513 31.8532,40.1694 31.7534,40.1693 27.9357,40.1667 14,40.1667 14,29.8711 27.9331,29.8711 31.7687,29.8737"
          />
        </g>
      </svg>
    </div>
  );
};

export default PlusIcon;
