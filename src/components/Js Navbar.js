import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import logo from "../assets/icons/user.png";

const Navbar = () => {
    return(
        <div className="flex justify-between items-center">
            <img src={logo} alt="logo" width={50} className="cursor-pointer"/>
            <ul className="hidden md:flex">
                <li className="px-2">
                    <a href="https://www.facebook.com/" target="_blank"></a>
                        <img src={facebook} alt="facebook" width={40} className="cursor-pointer"/>{" "}
                </li>
                <li className="px-2">
                    <a href="https://www.instagram.com/" target="_blank"></a>
                        <img src={instagram} alt="instagram" width={40} className="cursor-pointer"/>{" "}
                </li>
                <li className="px-2">
                    <a href="https://twitter.com/?lang=en" target="_blank"></a>
                        <img src={twitter} alt="twitter" width={40} className="cursor-pointer"/>{" "}
                </li>
            </ul>
        </div>

    );
};

export default Navbar;