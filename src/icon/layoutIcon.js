const LayoutIcon = ({ size, onClick }) => {
    return (
        <div  className="clickable-icon" onClick={onClick}>
            <svg viewBox="0 0 72 72" height={size || "72"} id="layoutIcon">
                <g id="Calque_2" data-name="Calque 2">
                    <g id="Calque_1-2" data-name="Calque 1">
                    <g>
                        <path d="M48.17,54.62H6.46A6.47,6.47,0,0,1,0,48.17v-42A6.2,6.2,0,0,1,6.19,0H48.43a6.2,6.2,0,0,1,6.19,6.19v42A6.47,6.47,0,0,1,48.17,54.62ZM6.19,2A4.22,4.22,0,0,0,2,6.19v42a4.49,4.49,0,0,0,4.49,4.49H48.17a4.49,4.49,0,0,0,4.49-4.49v-42A4.22,4.22,0,0,0,48.43,2Z"/>
                        <path d="M48.17,54.62H6.46A6.47,6.47,0,0,1,0,48.17V7.88H54.62V48.17A6.47,6.47,0,0,1,48.17,54.62ZM2,9.86V48.17a4.49,4.49,0,0,0,4.49,4.49H48.17a4.49,4.49,0,0,0,4.49-4.49V9.86Z"/>
                        <g>
                        <rect x="7.23" y="15.44" width="39.92" height="5.26" fill="#b1cc33"/>
                        <path d="M48.13,21.68H6.24V14.46H48.13Zm-39.92-2H46.16V16.43H8.21Z"/>
                        </g>
                        <g>
                        <rect x="7.23" y="26" width="17.42" height="21.38" fill="#b1cc33"/>
                        <path d="M25.64,48.36H6.24V25H25.64Zm-17.42-2H23.66V27H8.21Z"/>
                        </g>
                        <g>
                        <rect x="29.73" y="26" width="17.42" height="21.38" fill="#b1cc33"/>
                        <path d="M48.13,48.36H28.74V25H48.13Zm-17.42-2H46.16V27H30.71Z"/>
                        </g>
                    </g>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default LayoutIcon;
