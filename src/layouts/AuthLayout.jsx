import { Outlet } from "react-router";
import Footer from "../components/shared/Footer";

const AuthLayout = () => {
    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    );
}

export default AuthLayout;
