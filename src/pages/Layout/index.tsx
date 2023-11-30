import { Header } from "../../components/header";
import  {Outlet} from 'react-router-dom'
import { useLocation } from "react-router-dom";


export function Layout() {
  const location = useLocation();
  const caminhoDaURL = location.pathname;
  return (
    <div>
      <Header path={caminhoDaURL} />
      <Outlet />
    </div>
  )
}