import { Link } from 'react-router-dom';
import './SocialButtons.css'

function SocialButtons({colorButtons, socials_links}){
    const color = colorButtons;
    const {linkedin, tw, email} = socials_links;

    return(
        <div id="social-buttons-container">
            <div>
                <Link to={linkedin} className='links-part'>
                    <img className='socials-img'
                        src={require(`../../../images/icons/LinkedIn${color}.png`)} />
                </Link>
                </div>
            <div>
                <Link to={tw} className='links-part'>
                    <img className='socials-img'
                        src={require(`../../../images/icons/Twitter${color}.png`)} />
                </Link>
                </div>
            <div>
                <Link to={email} className='links-part'>
                    <img className='socials-img'
                        src={require(`../../../images/icons/Email${color}.png`)} />
                </Link>
                </div>
        </div>
    )
};

export default SocialButtons;