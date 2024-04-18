import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toast() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
      limit={1}
      toastStyle={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
      }}
    />
  );
}

export default Toast;
