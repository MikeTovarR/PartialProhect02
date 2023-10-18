import { Link } from 'react-router-dom';
import './SocialButtons.css'
import { useMyContext } from '../../DataContext.js';

function SocialButtons({colorButtons, name}){
    const color = colorButtons;
    const {globalData} = useMyContext();
    if (!globalData) {
        return <div>Loading...</div>;
    }
    console.log(globalData);
    return(
        <div id="social-buttons-container">
            <div>
                <Link to={globalData[name]['linkedin']} className='links-part'>
                    <img className='socials-img'
                        src={require(`../../media-sources/icons/LinkedIn${color}.png`)} />
                </Link>
                </div>
            <div>
                <Link to={globalData[name]['tw']} className='links-part'>
                    <img className='socials-img'
                        src={require(`../../media-sources/icons/Twitter${color}.png`)} />
                </Link>
                </div>
            <div>
                <Link to={globalData[name]['email']} className='links-part'>
                    <img className='socials-img'
                        src={require(`../../media-sources/icons/Email${color}.png`)} />
                </Link>
                </div>
        </div>
    )
};

export default SocialButtons;