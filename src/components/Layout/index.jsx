import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
    return (
        <div className="app">
            <div className="page-container">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;