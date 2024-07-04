import {connect} from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {

    return {
        sidebar: state.sidebar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}

}

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)