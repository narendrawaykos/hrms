import { Navigate, Outlet, redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { useAuth } from "./state/MainContext";

function App() {
  const drawerWidth: number = 240;
  const auth = useAuth();

  return (
    <>
      <Header drawerWidth={drawerWidth}>
        <Outlet />
      </Header>
      {!auth.isLoggedIn && <Navigate to={"auth"}></Navigate>}
    </>
  );
}

export default App;
