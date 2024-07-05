import {connect} from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {

    return {
        sidebar: state.sidebar
    }
}

export const NavbarContainer = connect(mapStateToProps, {})(Navbar)