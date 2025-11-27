import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { store } from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Toaster position="top-center" />
    </Provider>
  );
}

export default App;
