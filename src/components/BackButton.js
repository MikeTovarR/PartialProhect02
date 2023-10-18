import { Link } from "react-router-dom";

function BackButton(){
    return(
        <Link to={'/'}>
            <img src={require("../media-sources/icons/ArrowWhite.png")}/>
        </Link>
    );
}

export default BackButton;