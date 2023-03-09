import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/UI/Wrapper";
const Layout = ({ mobile, tablet, toggleRegister }) => {
  return (
    <>
      <Header mobile={mobile} tablet={tablet} toggle={toggleRegister} />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  );
};
export default Layout;
