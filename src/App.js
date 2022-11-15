import { ToastContainer } from "react-toastify";
// import { Provider } from "react-redux";
// import { store } from "./app/store";

import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer />
    </>
  );
}

export default App;