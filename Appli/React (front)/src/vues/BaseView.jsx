import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


const BaseView = (props) => {
    // const {route} = props;

    return (
        <>
            <Header/>
            <Outlet />
            <Footer/>
        </>
    );
};

export default BaseView;
