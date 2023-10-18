import { Link } from "react-router-dom";

function BackButton(){
    return(
        <Link to={'/'}>
            <img src={require("../media-sources/icons/ArrowWhite.png")} style={{width:'100%'}}/>
        </Link>
    );
}

export default BackButton;