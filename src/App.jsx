import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { store } from "./redux/store.js";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
