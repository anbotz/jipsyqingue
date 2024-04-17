const css = ` .avocado_vier{fill:#AF9480;}
.avocado_vijf{fill:#DBD2C1;}
.avocado_een{fill:#231F20;}
.st0{fill:#A3AEB5;}
.st1{fill:#FFFAEE;}
.st2{fill:#CC4121;}
.st3{fill:#788287;}
.st4{fill:#EAD13F;}
.st5{fill:#C3CC6A;}
.st6{fill:#D1712A;}
.st7{fill:#E0A838;}
.st8{fill:#716558;}
.st9{fill:#6F9B45;}
.st10{fill:#0E608E;}
.st11{fill:#E598A3;}
.st12{fill:#3D3935;}
.st13{fill:#248EBC;}
.st14{fill:#BF63C1;}`;
const ToastIcon = ({ size, onClick }) => {
  return (
    <div className="clickable-icon" onClick={onClick}>
      <svg height={size || "72"} width={size || "72"} viewBox="0 0 32 32">
        <style type="text/css">{css}</style>
        <g>
          <g>
            <path
              className="avocado_vijf"
              d="M4.5,30.5V16.086l-0.225-0.148C2.434,14.725,1.5,12.896,1.5,10.5c0-4.963,4.038-9,9-9
              c1.874,0,3.675,0.578,5.21,1.671L16,3.378l0.29-0.207C17.825,2.078,19.626,1.5,21.5,1.5c4.962,0,9,4.037,9,9
              c0,2.396-0.934,4.225-2.775,5.438L27.5,16.086V30.5H4.5z"
            />
          </g>
          <path
            className="avocado_vier"
            d="M30.5,10.5c0-4.963-4.038-9-9-9c-1.874,0-3.675,0.578-5.21,1.671L16,3.378l-0.29-0.207
            C14.175,2.078,12.374,1.5,10.5,1.5c-4.962,0-9,4.037-9,9c0,2.396,0.934,4.225,2.775,5.438L4.5,16.086V30.5h23V16.086l0.225-0.148
            C29.566,14.725,30.5,12.896,30.5,10.5z M26.35,13.85L25,14.739V28H7V14.739L5.65,13.85C4.524,13.108,4,12.044,4,10.5
            C4,6.916,6.916,4,10.5,4c1.351,0,2.651,0.417,3.76,1.207L16,6.446l1.74-1.24C18.849,4.417,20.149,4,21.5,4
            c3.584,0,6.5,2.916,6.5,6.5C28,12.044,27.476,13.108,26.35,13.85z"
          />
          <path
            className="avocado_een"
            d="M21.5,1c-2.118,0-3.947,0.657-5.5,1.763C14.447,1.657,12.552,1,10.5,1C5.253,1,1,5.253,1,10.5
            c0,2.729,1.157,4.642,3,5.855V31h24V16.355c1.843-1.214,3-3.126,3-5.855C31,5.253,26.752,1,21.5,1z M27.45,15.52L27,15.816v0.539
            V30H5V16.355v-0.539L4.55,15.52C2.858,14.406,2,12.717,2,10.5C2,5.813,5.813,2,10.5,2c1.769,0,3.471,0.546,4.92,1.578L16,3.991
            l0.58-0.413C18.03,2.546,19.731,2,21.5,2c4.687,0,8.5,3.813,8.5,8.5C30,12.717,29.142,14.406,27.45,15.52z"
          />
        </g>
      </svg>
    </div>
  );
};

export default ToastIcon;
