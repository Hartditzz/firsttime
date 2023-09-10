import avatar from "../assets/icons/panda.png";
import {useNavigate} from "react-router-dom";

function LandingPage () {
const navigate = useNavigate ();
    const handleToDetail = () => {
    navigate("/details");
    };
    return(
     <div className="text-center font-mono">
        <p className="text-2xl font-bold uppercase">About me</p>
        <div className="flex justify-center">
            <img src={avatar}
             alt="avatar"
             className="w-[20%] my-3 bg-[#FFFF00] rounded-full p-6"/>
        </div>
        <p className="text-md mt-2 font-bold text-white mx-36">
        There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
        If you are going to use a passage of Lorem Ipsum,
        you need to be sure there isn't anything embarrassing hidden in the middle of text.
        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
        making this the first true generator on the Internet. 
        </p>{" "}
        <br />
        <button className="text-xl text-[#FF1493] underline" onClick={() => handleToDetail()}>NEXT</button>
    </div>
    );
}

export default LandingPage;