import {Link} from "react-router-dom";
import {IconLogout2} from "@tabler/icons-react";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className={"navbar-brand text-light"} to={"/"}><IconLogout2/> Sign Out</Link>
            </div>
        </nav>
    )
}

export default Navbar;